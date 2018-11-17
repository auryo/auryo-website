import React from 'react';
import Layout from '../components/layout';
import check from "../images/check.svg";
import { navigate } from "gatsby"

class SuccessPage extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      navigate("/")
    }, 10000)
  }
  render() {
    return (
      <Layout>
        <header className="container pt-5 mt-5">
          <div className="row mb-5 pb-5">
            <div className="col-12 col-md-5">

              <div className="d-flex align-items-center mt-5 pt-5">
                <div style={{ width: 100, marginRight: "3rem" }}>
                  <img className="img-fluid" alt="check icon" src={check} />
                </div>

                <div>
                  <h1 className="mb-3">Logged in successfully</h1>
                  <div>Return back to the app and enjoy the music! Make sure you follow us on <a href="https://twitter.com/auryoapp">twitter</a> for updates.</div>
                </div>
              </div>

            </div>
          </div>

          <div className="py-5"></div>

          <div className="row pt-5">
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
        </header>
      </Layout>
    );
  }
}

export default SuccessPage
