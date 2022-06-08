import * as React from "react";
import Layout from "../layout/layout";
import Home from "../components/home";
import Featured from "../components/featured";
import SEO from '../components/seo'
const IndexPage = () => {
  return (
    <>
    <SEO title="Home"/>
      <Layout>
        <Home />
        <Featured />
      </Layout>
    </>
  );
};

export default IndexPage;
