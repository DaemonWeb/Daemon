import { PaperClipIcon } from '@heroicons/react/20/solid';
import { isEven } from '@/lib/utils';
import { Project } from '@/lib/types';
import Badge from '../Badge';


const descriptionField: {
  title: string
  key: keyof Project
}[] = [
  {
    title: "Project Title",
    key: "title", 
  },
  {
    title: "Application Type",
    key: "type",
  },
  {
    title: "Published Date",
    key: "publishDate",
  },
  {
    title: "Roles",
    key: "roles",
  },
  {
    title: "Features",
    key: "features",
  },
];

const getDescriptionValue = (project: Project, key: keyof Project, badgeColour?: string) => {
  const projectField = project[key];
    return Array.isArray(projectField)
      ? <div className='space-x-2'>
          {projectField.map((value) => (
            <Badge 
              key={String(value)} 
              text={String(value)} 
              colour={badgeColour}
            />
          ))}
        </div> 
      : String(projectField);
}
  
export default function ProjectDescription({
    project,
}: {
    project: Project,
}) {
  const badgeColour = "indigo";

  return (
    <div className="my-24 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Project Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Development details and roles</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {descriptionField.map((field, i) => (
            <div 
              key={field.title}
              className={`
              ${isEven(i) ? "bg-gray-50" : "bg-white"} 
                px-4 py-5 
                sm:grid 
                sm:grid-cols-3 
                sm:gap-4 sm:px-6
              `}
            >
              <dt className="text-sm font-medium text-gray-500">{field.title}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {getDescriptionValue(project, field.key, badgeColour)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
