import { useEffect } from "react";

// Layout components
import Landing from "../../../layout/components/Landing";

// Home components
import Showcase from "../components/Showcase";

const Home = () => {

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <main id="main">
            <Landing textLabel={"Full Stack Web Developer"} />
            <Showcase />
        </main>
    );
};

export default Home;