interface IProject {
  title: string;
  featured: boolean;
  summary: string;
  stack: Array<string>;
  links: {
    github: string;
    live: string;
  };
}

export default IProject;
