import React from "react";
import {
  nav,
  navListHeader,
  navListLink,
  navListItem,
  bgPrimary,
  txtWhite,
} from "./WritingLayout.module.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import NavLink from "@components/NavLink/NavLink";

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
            <NavLink
              path={`/writing/${node.frontmatter?.slug}`}
              label={node.frontmatter?.title ?? ""}
              truncate
            />
            {/* <Link
              className={`${navListLink} ${bgPrimary}`}
              to={`/writing/${node.frontmatter?.slug}`}
            >
              {node.frontmatter?.title}
            </Link> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ArticleNavList;
