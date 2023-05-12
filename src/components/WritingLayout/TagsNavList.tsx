import React from "react";
import {
  nav,
  navListHeader,
  navListItem,
  flex,
} from "./WritingLayout.module.css";
import { useStaticQuery, graphql, Link } from "gatsby";
import NavLink from "@components/NavLink/NavLink";

const TagsNavList = () => {
  const data: Queries.TagsQuery = useStaticQuery(graphql`
    query Tags {
      allMdx {
        distinct(field: { frontmatter: { tags: SELECT } })
      }
    }
  `);

  return (
    <nav className={`${nav} bg-dots`}>
      <Link to={`/writing/tags`}>
        <h3 className={navListHeader}>Tags</h3>
      </Link>
      <ul className={flex}>
        {data.allMdx?.distinct.map((tag) => (
          <li key={tag} className={navListItem}>
            <NavLink
              path={`/writing/tags/${tag}`}
              label={tag}
              variant={"secondary"}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TagsNavList;
