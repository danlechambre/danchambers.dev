import type { PageProps } from "gatsby";
import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "@components/Seo";
import MainLayout from "@components/MainLayout/MainLayout";
import WritingLayout from "@components/WritingLayout/WritingLayout";
import Article from "@components/Article/Article";

const pageTitle = "My Blog Posts";

const WritingPage = ({ data }: PageProps<Queries.WritingPageQuery>) => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <WritingLayout>
        {data.allMdx.nodes.map((node) => (
          <div className="mb-3" key={node.id}>
            <Article
              article={{
                slug: node.frontmatter?.slug ?? "",
                title: node.frontmatter?.title ?? "",
                dateCreated: node.frontmatter?.dateCreated ?? "",
                dateUpdated: node.frontmatter?.dateUpdated ?? "",
                excerpt: node.excerpt,
                tags: node.frontmatter?.tags,
              }}
            />
          </div>
        ))}
      </WritingLayout>
    </MainLayout>
  );
};

export const query = graphql`
  query WritingPage {
    allMdx(
      filter: { frontmatter: { title: { ne: null } } }
      sort: { frontmatter: { dateCreated: DESC } }
    ) {
      nodes {
        frontmatter {
          dateCreated
          dateUpdated
          slug
          title
          tags
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={pageTitle} />;

export default WritingPage;
