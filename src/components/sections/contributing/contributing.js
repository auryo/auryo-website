import React from 'react';
import styles from "./contributing.module.scss";
import Title from '../../title/title';
import donateCode from "../../../images/donate-code.svg";
import donateMoney from "../../../images/donate-money.svg";

const Contributing = () => (
  <div id="donate" className={styles.contributing}>
    <div className="container">
      <Title
        title="We appreciate your contribution"
        subTitle="I have already put a lot of time and effort into this project, and I don't regret it. But to continue adding new features and requests in the future, we would love your support."
      />
      <div className="row align-items-center mt-5">
        <div className={`col-12 col-md-6 ${styles.contribute_box} ${styles.contribute_box__featured}`}>
          <img src={donateCode} alt="contribute code" />
          <h3>You love great design or code, just like me.</h3>
          <p>Consider helping out by contributing your great mind, design or coding skills. Implement requested features or help to make Auryo look even better.</p>
          <a href="https://github.com/Superjo149/auryo/issues" rel="noopener noreferrer" target="_blank" className="btn btn-primary">View issues</a>
        </div>
        <div className={`col-12 col-md-6 ${styles.contribute_box}`}>
          <img src={donateMoney} alt="contribute money" />
          <h3>You love the app and would like to support development.</h3>
          <p>Maintaining and adding new features to the app takes time. Your support will allow us to make the app better. It will also cover costs like code signing.</p>
          <a href="https://www.patreon.com/sneljo" rel="noopener noreferrer" target="_blank" className="btn btn-outline-secondary">Donate</a>
        </div>
      </div>
    </div>
  </div>
)

export default Contributing
