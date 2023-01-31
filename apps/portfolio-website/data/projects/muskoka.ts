import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import muskokaThumbnail from "@/public/images/muskoka/muskoka_website_thumbnail.jpg";
import muskokaMainImg from "@/public/images/muskoka/muskoka_main.jpg";
import gallery1 from "@/public/images/muskoka/muskoka_gallery_1.jpg";
import gallery2 from "@/public/images/muskoka/muskoka_gallery_2.jpg";
import gallery3 from "@/public/images/muskoka/muskoka_gallery_3.jpg";
import gallery4 from "@/public/images/muskoka/muskoka_gallery_4.jpg";


export const title = "Muskoka Cabinet Company";
export const mainImg = muskokaMainImg;
export const thumbnailImg = muskokaThumbnail;
export const description = "A marketing website for a local cabinet making company.";
export const repoUrl = "https://github.com/JoshElias/muskoka-website_2022";
export const liveUrl = "https://www.muskokacabco.com";
export const publishDate = "2022-07-12";
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.CMS,
    ProjectFeature.Blog
];

export const tech = [
    ProjectTech.Webflow,
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