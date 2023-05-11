import { useStaticQuery, graphql } from "gatsby";
import React from "react";

interface SeoProps {
  title: string;
}

const Seo = ({ title }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};

export default Seo;
