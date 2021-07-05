import React from "react";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-text">
                <div className="landing-text-inner">
                    <img
                        className="brand_logo"
                        src="./img/dc_logo_blue.png"
                        alt="Brand Image" />
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="500">
                        David Cordova
                    </h1>
                    <p>
                        "My Portfolio"
                    </p>
                    <a href="#projects">
                        <img
                            src="https://img.icons8.com/carbon-copy/100/f47920/circled-down-2.png"
                            className="icon" />
                    </a>
                </div>
            </div>
            <div className="landing-image" />
        </div>
    );
};

export default Landing;