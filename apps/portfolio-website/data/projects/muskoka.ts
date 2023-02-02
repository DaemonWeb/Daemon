import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import muskokaThumbnail from "@/public/images/muskoka/muskoka_website_thumbnail.jpg";
import muskokaMainImg from "@/public/images/muskoka/muskoka_main.jpg";
import homeGallery from "@/public/images/muskoka/muskoka_home_gallery.jpg";
import productsGallery from "@/public/images/muskoka/muskoka_products_gallery.jpg";
import inspirationGallery from "@/public/images/muskoka/muskoka_inspiration_gallery.jpg";
import dealersGallery from "@/public/images/muskoka/muskoka_dealers_gallery.jpg";
import aboutGallery from "@/public/images/muskoka/muskoka_about_gallery.jpg";


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
    homeGallery,
    productsGallery,
    inspirationGallery,
    dealersGallery,
    aboutGallery,
];