import Article from "@components/Article/Article";
import MainLayout from "@components/MainLayout/MainLayout";
import WritingLayout from "@components/WritingLayout/WritingLayout";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import React from "react";

const TagsTemplate = ({ data }: PageProps<Queries.TagPageQuery>) => {
  const { edges } = data.allMdx;
  console.log(edges);

  return (
    <MainLayout pageTitle="tag page">
      <WritingLayout>
        {edges.map(({ node }) => {
          return (
            <div key={node.id} className="mb-3">
              <Article
                article={{
                  slug: node.frontmatter?.slug ?? "",
                  title: node.frontmatter?.title ?? "",
                  dateCreated: node.frontmatter?.dateCreated ?? "",
                  dateUpdated: node.frontmatter?.dateUpdated ?? "",
                }}
              />
            </div>
          );
        })}
      </WritingLayout>
    </MainLayout>
  );
};

export const query = graphql`
  query TagPage($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { dateCreated: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            dateCreated
            dateUpdated
            slug
            title
          }
          id
          excerpt
        }
      }
    }
  }
`;

export default TagsTemplate;
