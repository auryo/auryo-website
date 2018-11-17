import React from 'react';
import styles from "./title.module.scss";
import plays from "../../images/plays.svg";
import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => (
  <>
    <h2 className={styles.title}><img alt="" src={plays} className={styles.title__before} /> {title}</h2>
    {
      subTitle && (<p className={styles.title_sub}>{subTitle}</p>)
    }

  </>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.any
}

export default Title
