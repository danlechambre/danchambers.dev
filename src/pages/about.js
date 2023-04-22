import React from 'react'
import MainLayout from '../layouts/MainLayout'

const pageTitle = "About";

const AboutPage = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </MainLayout>
  )
}

export const Head = () => <title>{pageTitle}</title>

export default AboutPage;