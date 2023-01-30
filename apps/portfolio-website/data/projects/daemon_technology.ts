import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import daemonMainImg from "@/public/images/daemon_technology/daemon_main.jpg";
import daemonThumbnail from "@/public/images/daemon_technology/daemon_technology_thumbnail.jpg";
import gallery1 from "@/public/images/daemon_technology/daemon_gallery_1.jpg";
import gallery2 from "@/public/images/daemon_technology/daemon_gallery_2.jpg";
import gallery3 from "@/public/images/daemon_technology/daemon_gallery_3.jpg";
import gallery4 from "@/public/images/daemon_technology/daemon_gallery_4.jpg";


export const title = "Daemon Technology";
export const mainImg = daemonMainImg;
export const liveUrl = "https://web.archive.org/web/20180822083745/https://daemontechnology.com/";
export const description = "My original company website with a little too much personality.";
export const thumbnailImg = daemonThumbnail;
export const repoUrl = "https://github.com/JoshElias/daemon_technology_2018";
export const publishDate = new Date("2018-08-22");
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.Portfolio,
    ProjectFeature.LeadGen,
];

export const tech = [
    ProjectTech.Angular2,
    ProjectTech.AWS,
];

export const roles = [
    ProjectRole.Fullstack,
    ProjectRole.Design,
];

export const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
];
