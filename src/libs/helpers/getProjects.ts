import type Project from 'types/project';
import getFullPath, { PROJECT_PATH } from './getFullPath';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getProjects = async (): Promise<Project[]> => {
    const paths = getFullPath('/projects');

    return paths.map(p => {
        const fullpath = path.join(`${PROJECT_PATH}/projects`, p);
        const fileContent = fs.readFileSync(fullpath, 'utf8');

        const { data } = matter(fileContent);
        return {
            ...(data as Project),
        };
    });
};

export default getProjects;