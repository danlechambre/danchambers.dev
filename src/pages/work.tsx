import React from "react";
import Seo from "../components/Seo";
import MainLayout from "../components/MainLayout/MainLayout";

const pageTitle = "Work";

const WorkPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <p>{`coming soon y'all`}</p>
    </MainLayout>
  );
};

export const Head = () => <Seo title={pageTitle} />;

export default WorkPage;
