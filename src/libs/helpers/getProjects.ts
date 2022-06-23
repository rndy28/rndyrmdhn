import type Project from 'types/project';
import getFullPath, { PROJECT_PATH } from './getFullPath';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * 
 * @param projectPath folder name
 * @returns array of project
 */
const getProjects = async (projectPath: string): Promise<Project[]> => {
    const paths = getFullPath(`/${projectPath}`);

    return paths.map(p => {
        const fullpath = path.join(`${PROJECT_PATH}/${projectPath}`, p);
        const fileContent = fs.readFileSync(fullpath, 'utf8');

        const { data } = matter(fileContent);
        return {
            ...(data as Project),
        };
    });
};

export default getProjects;