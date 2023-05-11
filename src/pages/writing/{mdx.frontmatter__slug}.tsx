import * as React from "react";
import Seo from "@components/Seo";
import MainLayout from "@components/MainLayout/MainLayout";
import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { prose } from "@styles/modules/prose.module.css";

const ArticlePage = ({
  data,
  children,
}: PageProps<Queries.ArticlePageQuery>) => {
  // TODO - resolve 'getImage' issue
  const image =
    data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData;

  return (
    <MainLayout pageTitle={data.mdx?.frontmatter?.title ?? "Untitled"}>
      <p>{data.mdx?.frontmatter?.dateCreated}</p>
      {image && (
        <GatsbyImage
          image={image}
          alt={
            data.mdx?.frontmatter?.hero_image_alt ??
            "The description for this image is missing"
          }
        />
      )}
      <div className={prose}>{children}</div>
    </MainLayout>
  );
};

export const query = graphql`
  query ArticlePage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        dateCreated(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default ArticlePage;
