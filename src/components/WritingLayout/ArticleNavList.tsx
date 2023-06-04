import React from "react";
import { nav, navListHeader, navListItem } from "./WritingLayout.module.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import Label from "@components/Label/Label";

const ArticleNavList = () => {
  const data: Queries.WritingLayoutArticlesQuery = useStaticQuery(graphql`
    query WritingLayoutArticles {
      allMdx(
        filter: { frontmatter: { title: { ne: null } } }
        sort: { frontmatter: { dateCreated: DESC } }
      ) {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <nav className={`${nav} bg-dots`}>
      <Link to={`/writing`}>
        <h3 className={navListHeader}>Articles</h3>
      </Link>
      <ul>
        {data.allMdx?.nodes.map((node) => (
          <li key={node.frontmatter?.slug} className={`${navListItem}`}>
            <Label variant="primary" truncate>
              <Link to={`/writing/${node.frontmatter?.slug}`}>
                {node.frontmatter?.title ?? ""}
              </Link>
            </Label>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArticleNavList;
