import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="custom-hero-large">
      <div className="custom-hero-inner">
        <h1 className="hero-project-title">
          <img src = "img/logo.svg" className = "hero-logo"></img>
            {siteConfig.title}
        </h1>
        <p className="hero-project-tagline">{siteConfig.tagline}</p>
        <div className="custom-button-div">
          <Link
            className="custom-button button--primary button--lg"
            to="/docs/intro"
          >
            Get Started  
          </Link>
          <Link
            className="custom-button button--primary button--lg"
            to="/about"
          >
            Learn More 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome!`}
      description="Using machine learning to automatically detect flooding"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
