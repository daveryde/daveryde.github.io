import { useEffect } from "react";

import selfie from "../../../img/selfie.jpg";

const About = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <main id="about">
            <h1
                className="subheading center"
                data-aos="fade-right"
                data-aos-delay="500">
                David Cordova
            </h1>
            <h5 className="subheading center">
                Full Stack Web Developer
            </h5>
            <div className="about-info">
                {/* Image section */}
                <img
                    src={selfie}
                    alt="David Cordova Portrait"
                    className="bio-image" />
                <div className="bio">
                    <h3>
                        Bio
                    </h3>
                    <p>
                        Hi, I’m David. I am a technology and music enthusiast, otaku, full stack web
                        developer, musician, nonfluent polyglot. Unafraid of my ability to
                        identify an unimportant percentage of vehicles just by the logo or
                        sound of it’s exhaust. Driven to analyze objects, ideas, and even
                        conversations, heuristically for deeper insight
                        into human interaction and web technologies.<br /><br />
                        Web development crossed my path in middle school, during an era
                        when it was uncommon to find personal computers in every household. Many
                        hours were spent learning from educational books from the libr /ary’s
                        technology section. It took dedication, drive, and passion mixed with
                        persistence which turned out to be an abstract form of artistic expression.<br /><br />
                        <i>I am enthusiastic in my voyage through the vast and intricate
                        digital universe to find and implement solutions that generate harmony with human
                        interactions.</i>
                    </p>
                </div>
                <div className="detail detail-1">
                    <h3>
                        2002 - 2005
                    </h3>
                    <h6>
                        First step, creation.
                    </h6>
                    <p>
                        My parents bought our first "home desktop" computer. <br /><br />
                        With the help of HTML books from the libr /ary and promotional AOL
                        CD-ROM discs that gave you "free minutes" to connect to the
                        internet, I spent all summer determined to teach myself code.
                    </p>
                    <p>
                        For years, my uncle would mail out typed newsletters every 6 months
                        to family members living out of state to keep everyone informed of
                        reunions and holiday gatherings. With young and abundant creativity, I developed a
                        website for the families to read these online and to interact together
                        on the site.
                        <br /><br />
                        <small>* (August 1, 2003) - Myspace patented it before me </small>
                    </p>
                </div>
                <div className="detail detail-2">
                    <h3>
                        2005 - 2007
                    </h3>
                    <h6>
                        First Promotional.
                    </h6>
                    <p>
                        I became an active member of a small church band that needed help
                        promoting their message and music. With
                        determination and creativity, I designed and developed
                        my first live promotional website (no longer active) for the band "The Grupo".
                    </p>
                </div>
                <div className="detail detail-3">
                    <h3>
                        2017 - 2019
                    </h3>
                    <h6>
                        First Move.
                    </h6>
                    <p>
                        After 10+ years in the workforce, I found my way back to Web
                        Development through an internal work position opportunity where I
                        was able to assist other learn to code. To no surprise, my
                        journey was set and since then I have earned my associates in Web
                        Development (2019).
                    </p>
                </div>
                <div className="detail detail-4">
                    <h3>
                        2019 - Present
                    </h3>
                    <h6>
                        First Career.
                    </h6>
                    <p>
                        Made the decision and plan to earn a Bachelors in Internet and Web
                        Development (2020) from ASU. A few months later, landed my first
                        job as a Full Stack Software Engineer for{" "}
                        <a href="https://www.cyberdive.co" target="_blank"><u>Cyber Dive</u></a>,
                    helping parents gain peace of mind with their children using social media.
                </p>
                </div>
            </div>
        </main>
    );
};

export default About;