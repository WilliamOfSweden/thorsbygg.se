import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/indexPage/masthead/'
import CTASection from '../components/indexPage/ctaSection/'
import ServicesSection from '../components/indexPage/servicesSection/'
import SustainabilitySection from '../components/indexPage/sustainablitySection/'
import AboutSection from '../components/indexPage/aboutSection/'
import ContactSection from '../components/indexPage/contactSection/'

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <CTASection />
      <ServicesSection />
      <SustainabilitySection />
      <AboutSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage
