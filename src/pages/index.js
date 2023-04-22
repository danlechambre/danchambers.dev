import * as React from 'react';
import MainLayout from '../layouts/MainLayout';
import { StaticImage } from 'gatsby-plugin-image';

const pageTitle = "Home Page";

const IndexPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <p>Gatsby site y'all</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpg"
      />
    </MainLayout>
  )
}

export const Head = () => <title>{pageTitle}</title>

export default IndexPage;