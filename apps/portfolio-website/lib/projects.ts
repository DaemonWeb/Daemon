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
    //const projectPath = join(projectsDir, `${id}.ts`); This import statement is too dynamic for SWC to handle
    const projectData = await import(`../data/projects/${id}.ts`);
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
                    ...projectData,
                    publishDate: formatDate(projectData.publishDate)
                }
            })
        );

    return allProjectsData.sort((a, b) => {
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
}

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}