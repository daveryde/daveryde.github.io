import React from "react";

interface ProjectProps {
    name: string;
    image: string;
    demoLink: string;
    repoLink: string;
}

const Project = ({
    name,
    image,
    demoLink,
    repoLink
}: ProjectProps) => {
    return (
        <div
            className="projects-box"
            data-aos="fade"
            data-aos-delay="600">
            <img
                src={image}
                alt={name} />
            <a
                href={demoLink}
                className="button"
                target="_blank"
                rel="noreferrer">
                Live Demo
            </a>
            <a
                href={repoLink}
                className="button"
                target="_blank"
                rel="noreferrer">
                Github Code
            </a>
        </div>
    );
};

export default Project;