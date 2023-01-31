import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import autocorpThumbnail from "@/public/images/autocorp/autocorp_thumbnail.jpg";
import autocorpMain from "@/public/images/autocorp/autocorp_main.jpg";
import galleryTeam from "@/public/images/autocorp/autocorp_gallery_team.jpg";
import galleryTeam2 from "@/public/images/autocorp/autocorp_gallery_team_2.jpg";
import galleryCredit from "@/public/images/autocorp/autocorp_gallery_credit.jpg";
import galleryCredit2 from "@/public/images/autocorp/autocorp_gallery_credit_1.jpg";
import galleryTrade from "@/public/images/autocorp/autocorp_gallery_trade.jpg";
import gallery1 from "@/public/images/autocorp/autocorp_gallery_1.jpg";
import galleryFeatures from "@/public/images/autocorp/autocorp_gallery_features.jpg";


export const title = "AVA Product Suite";
export const mainImg = autocorpMain;
export const thumbnailImg = autocorpThumbnail;
export const description = "Autocorp provides high converting commerce tools for forward thinking dealers that fast tracks your online deal & financing process.";
export const liveUrl = "https://www.autocorp.ai";
export const publishDate = "2019-06-11";
export const type = ProjectType.SaaS;

export const features = [
    ProjectFeature.CMS,
    ProjectFeature.LeadGen,
    ProjectFeature.UserManagement,
];

export const tech = [
    ProjectTech.React,
    ProjectTech.NextJS,
    ProjectTech.Postgres,
    ProjectTech.AWS,
    ProjectTech.NodeJS,
    ProjectTech.Express,
    ProjectTech.Docker,
];

export const roles = [
    ProjectRole.ProjectManager,
    ProjectRole.ProductOwner
];

export const gallery = [
    galleryTeam,
    gallery1,
    galleryCredit,
    galleryCredit2, 
    galleryFeatures,
    galleryTeam2,
    galleryTrade,
]