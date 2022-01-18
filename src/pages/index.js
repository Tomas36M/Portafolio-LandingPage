import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
// import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import BlogSection from 'sections/blog-section';
import TestimonialCard from 'sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Tomas Munevar Escalante" />
          <ServiceSection />
          <KeyFeature />  
          <BlogSection />   
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
