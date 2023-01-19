import { useRouteData, RouteDataArgs, createRouteData } from "solid-start";
import ListView from "~/components/ListView";
import projectData from "~/data/projects";


export default function Projects() {
    return (
      <ListView 
        title={"Projects"}
        description={"A list of some of the projects that I've worked on during my career."}
        projects={projectData}
        />
    );
  }