import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import tempoWebsiteThumbnail from "@/public/images/tempo_website/tempo_website_thumbnail.jpg";
import tempoMain from "@/public/images/tempo_website/tempo_legacy.jpg";


export const title = "Tempostorm Website";
export const mainImg = tempoMain;
export const liveUrl = "https://www.tempostorm.com/";
export const description = "Tempostorm is a website for esports news and content.";
export const repoUrl = "https://github.com/JoshElias/esports-website";
export const thumbnailImg = tempoWebsiteThumbnail;
export const publishDate = "2015-08-17";
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.LeadGen,
    ProjectFeature.UserManagement,
    ProjectFeature.Newsletter,
    ProjectFeature.CMS,
    ProjectFeature.Blog,
];

export const tech = [
    ProjectTech.Angular1,
    ProjectTech.LoopbackJS,
    ProjectTech.MongoDB,
    ProjectTech.NodeJS,
    ProjectTech.Express,
];

export const roles = [
    ProjectRole.Backend,
    ProjectRole.ProjectManager,
];

export const gallery = [];