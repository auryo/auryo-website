import React from 'react';
import styles from "./downloads.module.scss";
import Title from '../../title/title';
import PropTypes from "prop-types";
import download from "../../../images/press-play.svg";

const getAssetsPerOS = (assets = []) => {
  const win = [];
  const mac = [];
  const linux = [];

  assets.forEach((asset) => {
    if (/(\.exe)$/g.exec(asset.name) !== null) {
      win.push(asset);
    } else if (/(\.dmg)$/g.exec(asset.name) !== null) {
      mac.push(asset);
    } else if (/(\.pacman|\.deb|\.rpm|\.AppImage)$/g.exec(asset.name) !== null) {
      linux.push(asset);
    }
  })

  return [win, mac, linux]
}

const getOS = () => {

  let os = null;

  let platform = "";

  if (typeof window !== 'undefined') {
    platform = window.navigator.platform;
  } else {
    os = "mac";
  }

  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'win';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }
  return os;
}

const getExtension = (asset) => {
  const split = asset.name.split(".");
  return split[split.length - 1];
}

const platforms = [{
  key: "win",
  name: "Windows"
}, {
  key: "mac",
  name: "Mac",
}, {
  key: "linux",
  name: "Linux"
}];

class Downloads extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "os"
    }

    this.renderAll = this.renderAll.bind(this);
    this.renderBasedOnOS = this.renderBasedOnOS.bind(this);
  }

  renderAll() {
    const { data: { assets } } = this.props;
    const assetsPerOS = getAssetsPerOS(assets);

    return (
      <div id="renderAll">
        {
          assetsPerOS.map((OSAssets, index) => {
            const platform = platforms[index];

            return OSAssets.map(asset => {
              const ext = getExtension(asset);

              return (
                <div key={asset.id} className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <div className="h5">{platform.name} (.{ext})</div>
                    {
                      ext === "pacman" && (
                        <div>This is also available via <a target="_blank" rel="noopener noreferrer" href="https://aur.archlinux.org/packages/auryo-bin">the arch repo</a>.</div>
                      )
                    }
                    {
                      ext === "deb" && (
                        <div>This is also available via <a target="_blank" rel="noopener noreferrer" href="https://snapcraft.io/auryo">snap</a>.</div>
                      )
                    }
                  </div>
                  <div>
                    <a className="btn btn-primary btn-sm" href={asset.browserDownloadUrl}>Download</a>
                  </div>
                </div>

              )
            });
          })
        }
      </div>
    )
  }

  renderBasedOnOS() {
    const { data: { assets } } = this.props;
    const userOS = getOS();
    const assetsPerOS = getAssetsPerOS(assets);

    const index = platforms.findIndex(d => d.key === userOS);

    return (
      <div id="renderBasedOnOS" className="text-center">
        {
          assetsPerOS[index].length === 1 ? (
            <a href={assetsPerOS[index][0].browserDownloadUrl} className={`btn btn-primary ${styles.download_btn}`}>
              <img alt={userOS} src={require(`../../../images/${userOS}.svg`)} />
              Download now
            </a>
          ) : (
              <div>
                {
                  assetsPerOS[index].map(asset => {
                    const ext = getExtension(asset);

                    return (
                      <a key={asset.id} href={asset.browserDownloadUrl} className={`btn btn-primary ${styles.download_btn} mb-3`}>
                        <img alt={userOS} src={require(`../../../images/${userOS}.svg`)} />
                        Download ({ext})
                      </a>
                    )
                  })
                }
              </div>
            )
        }
        <div>
          <button
            className="btn btn-link text-secondary"
            onClick={() => {
              this.setState({ view: "all" })
            }}
          >
            View downloads for all platforms
          </button>
        </div>
      </div>
    )
  }

  render() {
    const { data: { tagName, publishedAt } } = this.props;
    const { view } = this.state;
    const userOS = getOS();

    return (
      <div id="downloads" className={styles.downloads}>
        <div className="container">
          <Title
            title="Downloads"
            subTitle={(
              <>
                Latest release: <span className="badge badge-primary">{tagName}</span> - Released at: <span className="badge badge-primary">{new Date(publishedAt).toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}</span>
              </>
            )}
          />

          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-5">
              {
                view === "all" || !userOS ? this.renderAll() : this.renderBasedOnOS()
              }
            </div>
            <div className="col-7 text-center-md">
              <img alt="play illustration" className="img-fluid" src={download} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Downloads.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired,
    assets: PropTypes.array.isRequired,
  })
}

export default Downloads
