import React, { Fragment } from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import CTASection from '../components/indexPage/ctaSection/'
import ServicesSection from '../components/indexPage/servicesSection/'
import SustainabilitySection from '../components/indexPage/sustainablitySection/'
import AboutSection from '../components/indexPage/aboutSection/'
import ContactSection from '../components/indexPage/contactSection/'

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
