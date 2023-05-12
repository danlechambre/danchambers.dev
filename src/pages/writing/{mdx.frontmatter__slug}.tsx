import * as React from "react";
import Seo from "@components/Seo";
import MainLayout from "@components/MainLayout/MainLayout";
import { Link, PageProps } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { prose } from "@styles/modules/prose.module.css";
import Label from "@components/Label/Label";
import { getDateString } from "utils";

const ArticlePage = ({
  data,
  children,
}: PageProps<Queries.ArticlePageQuery>) => {
  // TODO - resolve 'getImage' issue
  const image =
    data.mdx?.frontmatter?.hero_image?.childImageSharp?.gatsbyImageData;

  const pubDate = getDateString(data.mdx?.frontmatter?.dateCreated);
  const updated = getDateString(data.mdx?.frontmatter?.dateUpdated);
  const inProgress = data.mdx?.frontmatter?.inProgress;

  return (
    <MainLayout pageTitle={data.mdx?.frontmatter?.title ?? "Untitled"}>
      <h1>{data.mdx?.frontmatter?.title}</h1>
      <div className="mb-3 h-spacing-3">
        {inProgress && <Label variant="tertiary">Still growing</Label>}
        <Label>Planted: {pubDate}</Label>
        {updated && <Label>Pruned: {updated}</Label>}
        {data.mdx?.frontmatter?.tags?.map((tag) => (
          <Link to={`/writing/tags/${tag}`} key={tag}>
            <Label key={tag} variant="secondary">
              {tag}
            </Label>
          </Link>
        ))}
      </div>
      {/* {image && (
        <GatsbyImage
          image={image}
          alt={
            data.mdx?.frontmatter?.hero_image_alt ??
            "The description for this image is missing"
          }
        />
      )} */}
      <div className={prose}>{children}</div>
    </MainLayout>
  );
};

export const query = graphql`
  query ArticlePage($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        dateCreated
        dateUpdated
        tags
        inProgress
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
