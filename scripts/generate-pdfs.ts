import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import pc from "picocolors";
import { chromium } from "playwright";

// Config
const previewUrl = "http://localhost:4321";
const outputDir = new URL("../public/assets/pdf/", import.meta.url);
const slugs = [
  {
    slug: "cv",
    outputFilename: "dan-chambers-cv",
  },
] as const;
// ------

async function waitForServer(url: string) {
  for (let i = 0; i < 10; i++) {
    try {
      await fetch(url);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
    }
    throw new Error(`Server at ${url} did not start in time`);
  }
}

async function main(previewUrl: string, outputDir: URL) {
  // Start preview server
  console.log(pc.yellow("Starting preview server..."));
  const server = spawn("npm", ["run", "preview"], {
    stdio: "ignore",
    detached: true,
  });

  try {
    await waitForServer(previewUrl);
    console.log(pc.green("Server ready!"));

    const browser = await chromium.launch();
    await mkdir(new URL(".", outputDir), { recursive: true });

    for (const { slug, outputFilename } of slugs) {
      const page = await browser.newPage();
      await page.goto(`${previewUrl}/${slug}`);

      const outputPath = new URL(`${outputFilename}.pdf`, outputDir).pathname;
      await page.pdf({
        path: outputPath,
        preferCSSPageSize: true,
      });

      await page.close();
      console.log(pc.green(`PDF saved to ${outputPath}`));
    }

    await browser.close();
  } finally {
    // Kill the preview server process group
    try {
      process.kill(-server.pid!, "SIGTERM");
    } catch {
      server.kill("SIGTERM");
    }
  }
}

main(previewUrl, outputDir).catch((e) => {
  console.error(pc.red(e));
  process.exit(1);
});
