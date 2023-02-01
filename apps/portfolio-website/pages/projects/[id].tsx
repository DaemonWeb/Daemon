import ProjectDescription from '@/components/Projects/ProjectDescription';
import ProjectHero from '@/components/Projects/ProjectHero';
import ProjectGallery from '@/components/Projects/ProjectGallery';
import { getProjectIds, getProjectData } from '@/lib/projects';
import { Project } from '@/lib/types';
import { GetStaticPaths, GetStaticProps } from 'next';


export const getStaticPaths: GetStaticPaths = async() => {
    const paths = await getProjectIds();
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = await getProjectData(params?.id as string);
    return {
        props: {
            project
        }
    }
}

export default function ProjectPage({ 
    project 
}:  { 
    project: Project 
}) {
    return (
        <>
            <ProjectHero project={project}/>
            <ProjectDescription project={project}/>
            {project.gallery &&
                <ProjectGallery images={project.gallery}/>
            }
        </>
    );
}