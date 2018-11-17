import React from 'react';
import Features from '../components/sections/features/features';
import Header from '../components/sections/header/header';
import Layout from '../components/layout';
import Contributing from '../components/sections/contributing/contributing';
import Downloads from '../components/sections/downloads/downloads';
import { StaticQuery, graphql } from 'gatsby';
import get from "lodash.get";
import CreateIssue from '../components/sections/create-issue';
import twitter from "../images/bxl-twitter.svg";
import github from "../images/bxl-github.svg";

const IndexPage = () => (
  <Layout>
    <Header />
    <Features />
    <Contributing />
    <CreateIssue />

    <StaticQuery
      query={graphql`
        query {
          allGithubRelease(filter: {draft: {eq: false}}, limit:1) {
            edges {
              node {
                name
                assets {
                  id,
                  downloadCount,
                  name,
                  browserDownloadUrl
                }
                body
                tagName
                publishedAt
              }
            }
          }
        }
      `}
      render={data => <Downloads data={get(data, "allGithubRelease.edges[0].node", {})} />} />
    <footer className="text-white bg-dark py-3">
      <div className="container">
        <div className="row py-3 mb-3">
          <div className="col-12 col-md-6">
            <div className="h5">Backers</div>
            <a href="https://opencollective.com/auryo">
              <img alt="backers" class="img-fluid" src="https://opencollective.com/auryo/tiers/backer-💪.svg?width=600" />
            </a>
          </div>
          <div className="col-12 col-md-6">
            <div className="h5">Sponsors</div>
            <a href="https://opencollective.com/auryo">
              <img alt="sponsors" class="img-fluid" src="https://opencollective.com/auryo/tiers/sponsors-🏆.svg?width=600" />
            </a>
          </div>
        </div>

        <div class="row justify-content-between bottom">
          <div class="col-12 col-md">This is an unoffical app and is not affiliated with SoundCloud.</div>
          <div class="col-12 col-md text-right">
            <a className="mr-2" href="https://github.com/Superjo149/auryo">
              <img alt="github logo" src={github} />
            </a>
            <a className="mr-2" href="https://twitter.com/auryoapp">
              <img alt="twitter logo" src={twitter} />
            </a>
            Sideproject by <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonas-snellinckx-27a78b132">Jonas
                    Snellinckx</a>
          </div>
        </div>
      </div>

    </footer>
  </Layout>
)

export default IndexPage;
