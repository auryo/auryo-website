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
        </header>
      </Layout>
    );
  }
}

export default SuccessPage
