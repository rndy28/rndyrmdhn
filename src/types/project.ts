interface Project {
    title: string;
    featured: boolean;
    summary: string;
    stack: Array<string>;
    links: {
        github: string;
        live: string;
    };
}

export interface ProjectProps {
    projects: Project[];
}

export default Project;

