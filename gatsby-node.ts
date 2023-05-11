import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/{tag}.tsx");

  const result: any = await graphql(`
    query Tags {
      allMdx {
        distinct(field: { frontmatter: { tags: SELECT } })
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tags: string[] = result.data?.allMdx?.distinct;

  console.log(tags);

  tags.forEach((tag) => {
    createPage({
      path: `/writing/tags/${tag}/`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  });
};
