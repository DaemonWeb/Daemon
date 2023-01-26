import { ContentWrapper } from '@/components/ContentView'
import Head from 'next/head'
import { Project } from '@/lib/types';
import projectData from "../data/project-data";
import Image from 'next/image';


const columns = [
    "Project",
    "Published",
    "Source",
    ""
]

function formatDate(date: Date) {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
  
function sortProjects(projects: Project[]) {
    return projects.sort((a, b) => {
        return b.publishDate.getTime() - a.publishDate.getTime();
    });
}

const projects = sortProjects(projectData)
    .map((project) => {
        return {
            ...project,
            publishDate: formatDate(project.publishDate),
        };
    });


export default function Projects() {
  return (
    <>
        <Head>
            <title>Projects - Daemon Web Tools</title>
            <meta name="description" content="Projects for Daemon Web Tools" />
        </Head>
        <ContentWrapper title="Projects">
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {columns.map((columnName) => (
                                            <th 
                                                key={columnName}
                                                scope="col" 
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                {columnName}
                                            </th> 
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {projects.map((project) => (
                                        <tr key={project.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <Image 
                                                            className="h-10 w-auto rounded-full" 
                                                            src={project.imgSrc} 
                                                            alt="Project Thumbnail"
                                                            width={40}
                                                            height={40} 
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{project.title}</div>
                                                        {project.url && 
                                                            <div 
                                                                className="
                                                                    text-gray-500
                                                                    overflow-hidden
                                                                    whitespace-nowrap
                                                                    text-ellipsis
                                                                ">
                                                                    {project.url}
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{project.publishDate}</div>
                                            </td>
        
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="flex text-gray-900">
                                                    <a 
                                                        href={project.repoUrl} 
                                                        rel="noreferrer" 
                                                        target="_blank" 
                                                        className="text-indigo-600 hover:text-indigo-900 disabled:opacity-75"
                                                    >
                                                        <Image 
                                                            className="h-9" 
                                                            src="/images/github_logo.svg"
                                                            alt="Github Logo"
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a 
                                                    href={project.url} 
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                    rel="noreferrer" 
                                                    target="_blank" 
                                                >
                                                    Visit<span className="sr-only">, {project.url}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    </>
  )
}
