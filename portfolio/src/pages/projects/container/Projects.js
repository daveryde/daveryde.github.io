import React, { useEffect } from "react";

// Layout components
import Landing from "../../../layout/components/Landing";

// Project component
import Project from "../components/Project";
import ProjectStack from "../components/ProjectStack";

// Projects data
import {
    personalProjects,
    educationalProjects
} from "../components/ProjectList";

const Projects = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <main id="main">
            <Landing textLabel={"My Portfolio"} />
            <ProjectStack />

            <section id="projects">
                <h4 class="subheading">Personal Projects</h4>
                <div class="projects">
                    {personalProjects.map((project, index) => (
                        <Project
                            key={index}
                            name={project.name}
                            image={project.image}
                            demoLink={project.demoLink}
                            repoLink={project.repoLink} />
                    ))}
                </div>
            </section>
            <section>
                <h4 class="subheading">Educational Projects</h4>
                <div class="projects" id="projects">
                    {educationalProjects.map((project, index) => (
                        <Project
                            key={index}
                            name={project.name}
                            image={project.image}
                            demoLink={project.demoLink}
                            repoLink={project.repoLink} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;