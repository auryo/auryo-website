import React from "react";
import { Parallax } from 'react-parallax';
import artist from "../../images/artist.jpg";
import Title from "../title/title";

const CreateIssue = () => (
    <Parallax
        className="my-5"
        blur={10}
        bgImage={artist}
        strength={400}
    >
        <div className="container">
            <div className="row align-items-center justify-content-between py-5 mt-3 text-white">
                <div className="col-12 col-md-6">
                    <Title
                        title="Feature or bug requests"
                        subTitle="Please let us know if you found a bug or want to request a feature. We'll try and get to this as soon as possible. If you know how, I highly encourage you to look at it yourself."
                    />
                </div>
                <div className="col-12 col-md-6 text-right">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Superjo149/auryo/issues" className="btn btn-primary">Create an issue</a>
                </div>
            </div>
        </div>

    </Parallax>
)

export default CreateIssue;