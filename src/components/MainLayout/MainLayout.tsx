import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import { bgDots } from "@styles/modules/global.module.css";
import * as styles from "./MainLayout.module.css";
import githubLogo from "@images/github-mark-white.svg";

interface MainLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const GITHUB_URL = `https://github.com/danlechambre`;

const navLinks = [
  { path: `/about`, label: `About` },
  { path: `/work`, label: `Work` },
  { path: `/writing`, label: `Writing` },
];

const MainLayout = ({ pageTitle, children }: MainLayoutProps) => {
  const data = useStaticQuery(graphql`
    query Layout {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={`${styles.headingContainer} ${bgDots}`}>
          <Link className={styles.headingText} to="/">
            Dan Chambers
          </Link>
        </div>
        <nav>
          <ul className={styles.navList}>
            {navLinks.map((navLink) => (
              <li key={navLink.path} className={styles.navListItem}>
                <Link to={navLink.path} className={styles.navLink}>
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>
          All materials &copy;
          {/* eslint-disable-next-line react/no-unknown-property */}
          <span property="cc:attributionName">Dan Chambers</span>.
        </p>
        <p>
          All content on{" "}
          {/* eslint-disable-next-line react/no-unknown-property */}
          <span className={styles.underline} property="dct:title">
            danchambers.dev
          </span>{" "}
          is licensed under{" "}
          <span>
            <a
              className={`${styles.footerLink} ${styles.licenseLink}`}
              href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
            >
              <span>CC BY-SA 4.0</span>
              <img
                className={styles.licenseImg}
                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                alt=""
              />
              <img
                className={styles.licenseImg}
                src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                alt=""
              />
              <img
                className={styles.licenseImg}
                src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                alt=""
              />
            </a>
          </span>
          . Share freely but provide attribution.
        </p>
        <p>
          Site source code is licensed under{" "}
          <a
            className={`${styles.footerLink} ${styles.licenseLink}`}
            href={`${GITHUB_URL}/danchambers.dev/blob/main/LICENSE`}
          >
            GNU General Public License v3.0
          </a>{" "}
          and is available on{" "}
          <a
            className={`${styles.footerLink} ${styles.githubLink}`}
            href={`${GITHUB_URL}/danchambers.dev`}
          >
            GitHub
            <img className={styles.licenseImg} src={githubLogo} alt="" />
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
