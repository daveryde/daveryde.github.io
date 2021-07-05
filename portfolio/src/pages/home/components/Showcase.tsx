import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

// Project component
import Project from "../../projects/components/Project";

// Project data
import { showcaseProjects } from "../../projects/components/ProjectList";

const Showcase = () => {
    const { hash } = useLocation();
    const projectRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (hash === '#projects') {
            projectRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <>
            <h1
                id="projects"
                ref={projectRef}
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