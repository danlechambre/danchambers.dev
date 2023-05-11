import * as React from "react";
import Seo from "@components/Seo";
import MainLayout from "@components/MainLayout/MainLayout";
import HomeContent from "@content/home.mdx";
import { prose } from "@styles/modules/prose.module.css";

const pageTitle = "Home Page";

const IndexPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <div className={prose}>
        <HomeContent />
      </div>
    </MainLayout>
  );
};

export const Head = () => <Seo title={pageTitle} />;

export default IndexPage;
