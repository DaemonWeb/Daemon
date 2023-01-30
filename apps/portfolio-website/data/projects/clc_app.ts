import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import mainImage from "@/public/images/clc_app/clc_app_main.jpg";
import clcAppThumbnail from "@/public/images/clc_app/clc_app_thumbnail.jpg";
import gallery1 from "@/public/images/clc_app/clc_app_gallery_1.jpg";


export const title = "Car Loans Canada Credit Application";
export const liveUrl = "https://apply.carloanscanada.com/";
export const description = "A multi-step credit application for Car Loans Canada.";
export const mainImg = mainImage;
export const thumbnailImg = clcAppThumbnail;
export const publishDate = new Date("2018-05-13");
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.LeadGen,
];

export const tech = [
    ProjectTech.Gatsby,
    ProjectTech.React,
    ProjectTech.AWS,
];

export const roles = [
    ProjectRole.Fullstack,
    ProjectRole.Design,
    ProjectRole.ProjectManager,
    ProjectRole.ProductOwner,
];

export const gallery = [
    gallery1,
];