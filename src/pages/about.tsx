import React from "react";
import Seo from "@components/Seo";
import MainLayout from "@components/MainLayout/MainLayout";
import AboutContent from "@content/about.mdx";

const pageTitle = "About";

const AboutPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <div className="prose">
        <AboutContent />
      </div>
    </MainLayout>
  );
};

export const Head = () => <Seo title={pageTitle} />;

export default AboutPage;
