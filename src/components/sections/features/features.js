import React from 'react';
import stream from "../../../images/stream.png";
import featuresBg3 from "../../../images/features-wave3.svg";
import plays from "../../../images/plays.svg";
import typing from "../../../images/typing.svg";
import headphone from "../../../images/headphones.svg";
import planet from "../../../images/planet-earth.svg";
import styles from "./features.module.scss";

const Features = () => (
  <div className={styles.features}>
    <img alt="" className={styles.features_bg} src={featuresBg3} />
    <div className="container position-relative">
      <div className="row align-items-center">
        <div className="col-12 col-md-7 position-relative">
          <img alt="" className={styles.screenshot__after} src={plays} />
          <img className="img-fluid" alt="auryo stream page" src={stream} />
        </div>
        <div className="col-12 col-md-5">
          <h2>Listen to your favourite tracks and playlists without a browser</h2>
          <p>Stop searching for that lost SoundCloud tab, just use this desktop app instead.</p>
        </div>
      </div>
      <div className="row" style={{ padding: "0 25px" }}>
        <div className="col-12 col-md-4">
          <img alt="typing icon" className={styles.feature_img} src={typing} />
          <h2 className="h5">All the keyboard shortcuts and integrations you need</h2>
          <div>We integrate with native media shortcuts aswell as touchbar, MPRIS & windows media center because skipping tracks shouldn't be a hassle.</div>
        </div>
        <div className="col-12 col-md-4">
          <img alt="headphones icon" className={styles.feature_img} src={headphone} />
          <h2 className="h5">Easily discover new music by listening to charts & related tracks</h2>
          <div>SoundCloud isn't always the most intuitive to navigate. But it has great music. Easily navigate through our simple UI to discover new music.</div>
        </div>
        <div className="col-12 col-md-4">
          <img alt="planet icon" className={styles.feature_img} src={planet} />
          <h2 className="h5">Everything is open-source and easily extensible</h2>
          <div>The project has been written in Typescript and written in such a way that new features can easily be added. So hack away and submit a PR.</div>
        </div>
      </div>
    </div>
  </div>
)

export default Features
