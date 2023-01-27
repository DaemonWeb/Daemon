import { ContentWrapper } from '@/components/ContentView'
import Head from 'next/head'
import { Project } from '@/lib/types';
import projectData from "../data/project-data";
import Image from 'next/image';
import { combineClasses } from '@/lib/utils';


const columns = [
    {
        title: "Project",
        classNames: "pl-6 pr-3 ",
    },
    {
        title: "Published",
        classNames: "px-3 w-40"
    },
    {
        title: "Source",
        classNames: "px-3 text-center w-24"
    },
    {
        title: "",
        classNames: "px-3 w-24"
    }
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
                            <table className="min-w-full w-full divide-y divide-gray-300 table-fixed">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {columns.map((column) => (
                                            <th 
                                                key={column.title}
                                                scope="col" 
                                                className={
                                                    combineClasses(
                                                        column.classNames,
                                                        "py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    )
                                                }
                                            >
                                                {column.title}
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
                                                            placeholder="blur"
                                                        />
                                                    </div>
                                                    <div className="mx-4 w-[calc(100%-56px)]">
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
                                                <div className="flex text-gray-900 justify-center">
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
                                            <td className="relative whitespace-nowrap text-center py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
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
