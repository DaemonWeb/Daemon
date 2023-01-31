import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import smartWebsiteThumbnail from "@/public/images/smart/smart_website_thumbnail.jpg";
import smartMain from "@/public/images/smart/smart_main.jpg";
import galleryHome from "@/public/images/smart/smart_home_gallery.jpg";
import galleryFeatures from "@/public/images/smart/smart_features_gallery.jpg";
import galleryContact from "@/public/images/smart/smart_contact_gallery.jpg";
import galleryArticles from "@/public/images/smart/smart_articles_gallery.jpg";
import galleryFaq from "@/public/images/smart/smart_faq_gallery.jpg";


export const title = "SMART MRP"
export const mainImg = smartMain;
export const thumbnailImg = smartWebsiteThumbnail;
export const description = "SMART is a shop management and resource tool that helps manufacturers and distributors manage their shop floor and resources.";
export const repoUrl = "https://github.com/JoshElias/smart-website";
export const liveUrl = "https://www.smartmrp.com";
export const publishDate = "2017-05-12";
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.VideoHosting,
    ProjectFeature.Blog
];

export const tech = [
    ProjectTech.Angular2,
    ProjectTech.AWS
];

export const roles = [
    ProjectRole.Fullstack,
    ProjectRole.Design,
    ProjectRole.ProjectManager
];

export const gallery = [
    galleryHome,
    galleryFeatures,
    galleryContact,
    galleryArticles,
    galleryFaq
];


