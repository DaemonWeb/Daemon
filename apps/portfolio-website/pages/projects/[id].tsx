import { useRouter } from 'next/router';
import projectData from '@/data/project-data';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectHero from '@/components/ProjectHero';
import ProjectGallery from '@/components/ProjectGallery';

export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const project = projectData.find((project) => project.id === id);

    return (
        <>
            <ProjectHero />
            <ProjectDescription project={project} />
            <ProjectGallery />
        </>
    );
}