import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import icpncThumbnail from "@/public/images/icpnc/icpnc_thumbnail.jpg";
import icpncMain from "@/public/images/icpnc/icpnc_main.jpg";
import homeGallery from "@/public/images/icpnc/icpnc_home_gallery.jpg";
import membersGallery from "@/public/images/icpnc/icpnc_members_gallery.jpg";
import resourcesGallery from "@/public/images/icpnc/icpnc_resources_gallery.jpg";
import contactGallery from "@/public/images/icpnc/icpnc_contact_gallery.jpg";


export const title = "ICPNC";
export const mainImg = icpncMain;
export const thumbnailImg = icpncThumbnail;
export const description = "The ICPNC brings together leading practitioners in child protection to enhance Canadian organizations’ capacity to ensure results-oriented, innovative and effective child protection programming.";
export const liveUrl = "https://www.icpnc.org";
export const publishDate = new Date("2020-10-05");
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.CMS,
    ProjectFeature.Blog,
    ProjectFeature.Localization,
    ProjectFeature.Newsletter,
];

export const tech = [
    ProjectTech.Webflow,
];

export const roles = [
    ProjectRole.Fullstack,
    ProjectRole.ProjectManager,
];

export const gallery = [
    homeGallery,
    membersGallery,
    resourcesGallery,
    contactGallery,
]
