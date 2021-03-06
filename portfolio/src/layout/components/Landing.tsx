import { Link } from 'react-router-dom';

import brandLogo from "../../img/dc_logo_blue.png"

interface LandingProps {
    textLabel: string;
}

const Landing = ({ textLabel }: LandingProps) => {
    return (
        <div className="landing">
            <div className="landing-text">
                <div className="landing-text-inner">
                    <img
                        className="brand_logo"
                        src={brandLogo}
                        alt="Brand Logo" />
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="500">
                        David Cordova
                    </h1>
                    <p>
                        {textLabel ? `"${textLabel}"` : <></>}
                    </p>
                    <Link to={{ hash: "projects" }}>
                        <img
                            className="icon"
                            src="https://img.icons8.com/carbon-copy/100/f47920/circled-down-2.png"
                            alt="icon" />
                    </Link>
                </div>
            </div>
            <div className="landing-image" />
        </div>
    );
};

export default Landing;