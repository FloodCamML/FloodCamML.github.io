import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Image Labelling",
    Svg: require("../../static/img/camml_flood_text-01.svg").default,
    description: (
      <>
        Crowd-source your webcam image labelling with a CamML app. Record user responses for free using Google Sheets and Drive.
      </>
    )
  },
  {
    title: "Deploying a ML model",
    Svg: require("../../static/img/camml_flood_computer-01.svg").default,
    description: (
      <>
        Put your image classification model - or our flood detection model - in the app to classify webcam images.
      </>
    )
  },
  {
    title: "Simple templates",
    Svg: require("../../static/img/flood-camml-form-01.svg").default,
    description: (
      <>
        Use our templates and tutorial to easily customize your app by editing <code>.csv</code> and <code>.md</code> files. 
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
