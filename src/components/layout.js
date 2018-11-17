import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import '../scss/index.scss';
import styles from "./layout.module.scss";
import logo from "../images/auryo-dark.png"
import bgSvg from "../images/header-bg.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords},
          ]}
        >
          <html lang="en" />
        </Helmet>
        <>
          <img alt="" className={`${styles.header_bg} d-sm-none d-md-block`} src={bgSvg} />
          <div className="container mt-5">
            <img
              className={styles.header_logo}
              alt="auryo logo"
              src={logo}
            />
          </div>
          {children}
        </>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
