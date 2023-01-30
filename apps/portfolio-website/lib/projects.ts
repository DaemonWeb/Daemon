import { readdir } from 'fs/promises';
import { join } from 'path';
import { Project } from './types';


const projectsDir = join(process.cwd(), 'data', 'projects');

export async function getProjectIds(): Promise<{ params: { id: string; } }[]> {
    const fileNames = await readdir(projectsDir);
    return fileNames.map(fileName => {
        const id = fileName.replace(/\.ts$/, '');
        return {
            params: { id }
        }
    });
}   

export async function getProjectData(id: string): Promise<Project> {
    const projectPath = join(projectsDir, `${id}.ts`);
    const projectData = await import(projectPath);
    return {
        id,
        ...projectData
    }
}

export async function getFormattedProjectsData(): Promise<Project[]> {
    const fileNames = await readdir(projectsDir);
    const allProjectsData = await Promise.all(
            fileNames.map(async fileName => {
                const id = fileName.replace(/\.ts$/, '');
                const projectData = await getProjectData(id)
                return {
                    ...projectData
                }
            })
        );

    return allProjectsData.sort((a, b) => {
        return b.publishDate.getTime() - a.publishDate.getTime();
    });
}
