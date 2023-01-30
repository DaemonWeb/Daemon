import ProjectDescription from '@/components/ProjectDescription';
import ProjectHero from '@/components/ProjectHero';
import ProjectGallery from '@/components/ProjectGallery';
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
            project,
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
            <ProjectHero />
            <ProjectDescription project={project} />
            <ProjectGallery />
        </>
    );
}