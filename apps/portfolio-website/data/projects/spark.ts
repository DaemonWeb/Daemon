import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import sparkMain from "@/public/images/spark/spark_website.jpg";
import sparkThumbnail from "@/public/images/spark/spark_thumbnail.jpg";


export const title = "Spark Screens";
export const liveUrl = "https://web.archive.org/web/20180218184619/http://sparkscreens.com/";
export const description = "A kiosk platform built with Unity3D and Android Studio";
export const repoUrl = "https://github.com/JoshElias/esports-website";
export const mainImg = sparkMain;
export const thumbnailImg = sparkThumbnail;
export const publishDate = "2012-01-17";
export const type = ProjectType.Game;

export const features = [
    ProjectFeature.UserManagement,
];

export const tech = [
    ProjectTech.LoopbackJS,
    ProjectTech.Angular1,
    ProjectTech.MongoDB,
    ProjectTech.NodeJS,
    ProjectTech.Express,
];

export const roles = [
    ProjectRole.Backend,
];

export const gallery = [];