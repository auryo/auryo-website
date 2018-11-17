import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import GitHubButton from 'react-github-button';
import "./github-button.scss";

const Header = () => (
  <header className="container pb-5 mb-5">
    <div className="row">
      <div className="col-12 col-md-5">
        <div className="mt-5 pt-5">
          <h1 className="mb-3">A SoundCloud client for your desktop</h1>
          <div>Listen to SoundCloud® from the comfort of your desktop. Use keyboard shortcuts to navigate through your music. Be more productive.</div>
          <div className="d-flex align-items-center mt-4">
            <AnchorLink href="#downloads" offset="-75" className="btn btn-primary">Download</AnchorLink>
            <GitHubButton
              className="pl-4"
              type="stargazers"
              size="large"
              namespace="Superjo149"
              repo="auryo"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
)
export default Header
