import * as React from 'react';
import MainLayout from '../layouts/MainLayout';

const pageTitle = "Home Page";

const IndexPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <p>Gatsby site y'all</p>
    </MainLayout>
  )
}

export const Head = () => <title>{pageTitle}</title>

export default IndexPage;