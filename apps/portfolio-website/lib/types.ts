import { StaticImageData } from "next/image";
import { LinkProps } from "next/link";

export type NavOptionInput = {
    title: string,
    href: string,
    icon: any,
    disabled?: boolean
}

export type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName?: string
    inactiveClassName?: string,
    disabled?: boolean
}

export type Project = {
    id: string;
    title: string;
    mainImg: StaticImageData;
    thumbnailImg: StaticImageData;
    description: string;
    repoUrl?: string;
    liveUrl: string;
    publishDate: string;
    type: ProjectType;
    features: ProjectFeature[];
    tech: ProjectTech[];
    roles: ProjectRole[];
    gallery?: StaticImageData[];
}

export const enum ProjectType {
    Website = "Website",
    App = "App",
    SaaS = "SaaS",
    Game = "Game",
}

export const enum ProjectFeature {
    Blog = "Blog",
    CMS = "CMS",
    Portfolio = "Portfolio",
    Ecommerce = "Ecommerce",
    Localization = "Localization",
    Newsletter = "Newsletter",
    VideoHosting = "Video Hosting",
    LeadGen = "Lead Generation",
    UserManagement = "User Management",
}

export const enum ProjectTech {
    React = "React",
    SolidJS = "SolidJS",
    Angular = "Angular",
    Webflow = "Webflow",
    Gatsby = "Gatsby",
    Angular1 = "Angular1",
    Angular2 = "Angular2",
    Postgres = "Postgres",
    AWS = "AWS",
    NextJS = "NextJS",
    LoopbackJS = "LoopbackJS",
    MongoDB = "MongoDB",
    Express = "Express",
    NodeJS = "NodeJS",
    Docker = "Docker",
}

export const enum ProjectRole {
    Frontend = "Frontend Developer",
    Backend = "Backend Developer",
    Fullstack = "Fullstack Developer",
    Design = "Designer",
    ProjectManager = "Project Manager",
    QA = "QA",
    DevOps = "DevOps",
    ProductOwner = "Product Owner",
}