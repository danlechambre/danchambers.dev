import MainLayout from "@components/MainLayout/MainLayout";
import NavLink from "@components/NavLink/NavLink";
import WritingLayout from "@components/WritingLayout/WritingLayout";
import {
  flex,
  navListItem,
} from "@components/WritingLayout/WritingLayout.module.css";
import { Link, PageProps, graphql } from "gatsby";
import React from "react";

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  return (
    <MainLayout pageTitle={""}>
      <WritingLayout>
        <h2>Tags</h2>
        <p className="mb-3">{`Browse articles by tag if you're in to that sort of thing`}</p>
        <nav>
          <ul className={flex}>
            {data.allMdx?.distinct.map((tag) => (
              <li key={tag} className={navListItem}>
                {/* <Link to={`/writing/tags/${tag}`}>{tag}</Link> */}
                <NavLink
                  path={`/writing/tags/${tag}`}
                  label={tag}
                  variant="secondary"
                />
              </li>
            ))}
          </ul>
        </nav>
      </WritingLayout>
    </MainLayout>
  );
};

export const query = graphql`
  query TagsPage {
    allMdx {
      distinct(field: { frontmatter: { tags: SELECT } })
    }
  }
`;

export default TagsPage;
