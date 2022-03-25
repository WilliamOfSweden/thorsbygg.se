import React, { Fragment } from 'react'

import { SEO } from '../components/shared/'
import { Layout } from '../components/layout/'
import {
  AboutSection,
  CTASection,
  ContactSection,
  Masthead,
  ServicesSection,
  SustainabilitySection,
} from '../components/indexPageComponents/'

const IndexPage = () => (
  <Fragment>
    <SEO />
    <Layout>
      <Masthead />
      <CTASection />
      <ServicesSection />
      <SustainabilitySection />
      <AboutSection />
      <ContactSection />
    </Layout>
  </Fragment>
)

export default IndexPage
