import movieApp from "../assets/movieapp.png";
import rosterApp from "../assets/roster_app.png";
import reactCalculator from "../assets/react_calculator.png";
import dataTable from "../assets/data_table.png";

export interface IProjectList {
    title: string;
    category: string;
    description: string;
    image?: string;
    demoLink: string;
    repoLink: string;
}

export const showcaseProjects: IProjectList[] = [
    {
        title: "Calculator",
        category: "React - Frontend App",
        description: "React Calculator is a fully functional calculator built in React JS with support for basic operators (Addition, Subtraction, Multiplication, and Division), decimal arithmetic, and additional functions (Square root, exponents).",
        image: reactCalculator,
        demoLink: "https://davidcordova.dev/react-calculator/",
        repoLink: "https://github.com/daveryde/react-calculator"
    },
    {
        title: "Data Table",
        category: "React - Frontend App",
        description: "Data Table is an interactive and expandable ficticious candidate data table built in React JS which renders and optionally offers expand function to reveal a list of that candidate's applications.",
        image: dataTable,
        demoLink: "https://ddavidcordova.dev/nimble-code-challenge/",
        repoLink: "https://github.com/daveryde/nimble-code-challenge"
    },
    {
        title: "Movie App",
        category: "MERN - Fullstack App",
        description: "Movie App is a MongoDB, Express, React, and nodeJS stack application that gives guests and registered users access to a vast database (TMDb) of movies, trailers, actors/actresses, and tv shows.",
        image: movieApp,
        demoLink: "https://daveryde-movieapp.herokuapp.com",
        repoLink: "https://github.com/daveryde/movieapp"
    },
    {
        title: "Roster App",
        category: "MEHN - Fullstack App",
        description: "Roster App is a MongoDB, Express, Handlebars, nodeJS stack application that was developed for users to quickly and easily create a print-friendly formatted photo roster using only a unique id number from an external image data base.",
        image: rosterApp,
        demoLink: "https://arcane-retreat-70868.herokuapp.com/",
        repoLink: "https://github.com/daveryde/RosterApp-hbs"
    }
];

export const personalProjects: IProjectList[] = [
    {
        title: "MERN Shopping List Project",
        category: "",
        description: "",
        // image: movieApp,
        demoLink: "https://daveryde-movieapp.herokuapp.com",
        repoLink: "https://github.com/daveryde/movieapp"
    },
    {
        title: "React Client Panel Project",
        category: "",
        description: "",
        // image: rosterApp,
        demoLink: "https://arcane-retreat-70868.herokuapp.com/",
        repoLink: "https://github.com/daveryde/RosterApp-hbs"
    }
];

export const educationalProjects: IProjectList[] = [
    {
        title: "ASU GIT 418 Ajax API",
        category: "",
        description: "",
        // image: ajaxApp,
        demoLink: "https://daveryde.github.io/ASUajax/",
        repoLink: "https://github.com/daveryde/ASUajax"
    },
    {
        title: "ASU GIT 418 Geolocation",
        category: "",
        description: "",
        // image: geolocationApp,
        demoLink: "https://daveryde.github.io/ASUgeolocation/",
        repoLink: "https://github.com/daveryde/ASUgeolocation"
    },
    {
        title: "ASU GIT 418 Form Validation Blog",
        category: "",
        description: "",
        // image: jsObjectsApp,
        demoLink: "https://daveryde.github.io/ASUjavascriptobjects/",
        repoLink: "https://github.com/daveryde/ASUjavascriptobjects"
    },
    {
        title: "ASU GIT 417 Form Validation Blog",
        category: "",
        description: "",
        // image: jsValidationApp,
        demoLink: "https://daveryde.github.io/ASUformvalidation/index.html",
        repoLink: "https://github.com/daveryde/ASUformvalidation"
    },
    {
        title: "ASU GIT 414 Bleach Fan Site",
        category: "",
        description: "",
        // image: animeFanApp,
        demoLink: "https://daveryde.github.io/BFS/",
        repoLink: "https://github.com/daveryde/BFS/"
    },
    {
        title: "ASU GIT 337 Fixed Layout",
        category: "",
        description: "",
        // image: fixedLayoutApp,
        demoLink: "https://daveryde.github.io/ASUweblayout/",
        repoLink: "https://github.com/daveryde/ASUweblayout"
    },
    {
        title: "myTunes Project",
        category: "",
        description: "",
        // image: myTunesApp,
        demoLink: "https://daveryde.github.io/myTunes",
        repoLink: "https://github.com/daveryde/myTunes"
    },
    {
        title: "Dev Connector Project",
        category: "",
        description: "",
        // image: devConnectorApp,
        demoLink: "https://quiet-reaches-39737.herokuapp.com/",
        repoLink: "https://github.com/daveryde/devconnector"
    },
];

export const allProjects: IProjectList[] = [
    {
        title: "Movie App",
        category: "MERN - Fullstack App",
        description: "",
        // image: movieApp,
        demoLink: "https://daveryde-movieapp.herokuapp.com",
        repoLink: "https://github.com/daveryde/movieapp"
    },
    {
        title: "Roster App",
        category: "",
        description: "",
        // image: rosterApp,
        demoLink: "https://arcane-retreat-70868.herokuapp.com/",
        repoLink: "https://github.com/daveryde/RosterApp-hbs"
    }
];