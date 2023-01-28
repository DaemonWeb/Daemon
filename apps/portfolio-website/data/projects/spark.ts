import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import muskokaWebsiteThumbnail from "@/public/images/muskoka/muskoka_website_thumbnail.jpg";

const project = {
    title: "Muskoka Cabinet Company",
    imgSrc: muskokaWebsiteThumbnail,
    description: "A marketing website for a local cabinet making company.",
    repoUrl: "https://github.com/JoshElias/muskoka-website_2022",
    url: "https://www.muskokacabco.com",
    publishDate: new Date("2022-07-12"),
    type: ProjectType.Website,
    features: [
        ProjectFeature.CMS,
        ProjectFeature.Blog
    ],
    tech: [
        ProjectTech.Webflow,
    ],
    roles: [
        ProjectRole.Fullstack,
        ProjectRole.Design,
    ]
}

export default project;