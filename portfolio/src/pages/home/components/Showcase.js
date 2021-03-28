import React from "react";

// Project component
import Project from "../../projects/components/Project";

// Project data
import { showcaseProjects } from "../../projects/components/ProjectList";

const Showcase = () => {
    return (
        <>
            <h1
                id="projects"
                className="subheading center">
                Top Projects
            </h1>
            {showcaseProjects.map((project, index) => (
                <Project
                    key={index}
                    name={project.name}
                    image={project.image}
                    demoLink={project.demoLink}
                    repoLink={project.repoLink} />
            ))}
        </>
    );
};

export default Showcase;