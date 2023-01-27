import { Project, ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../lib/types";
import { slugify } from "@/lib/utils";

import muskokaWebsiteThumbnail from "@/public/images/muskoka_website_thumbnail.jpg";
import icpncThumbnail from "@/public/images/icpnc_thumbnail.jpg";
import smartWebsiteThumbnail from "@/public/images/smart_website_thumbnail.jpg";
import autocorpThumbnail from "@/public/images/autocorp_thumbnail.jpg";
import clcWebsiteThumbnail from "@/public/images/clc_website_thumbnail.jpg";
import clcAppThumbnail from "@/public/images/clc_app_thumbnail.jpg";
import tempoWebsiteThumbnail from "@/public/images/tempo_website_thumbnail.jpg";
import tempoDraftThumbnail from "@/public/images/tempo_draft_thumbnail.jpg";
import sparkWebsiteThumbnail from "@/public/images/spark_thumbnail.jpg";


export default [
    {
        title: "Muskoka Cabinet Company",
        imgSrc: muskokaWebsiteThumbnail,
        description: "A marketing website for a local cabinet making company.",
        repoUrl: "https://github.com/JoshElias/muskoka-website_2022",
        url: "https://www.muskokacabco.com",
        publishDate: new Date("2022-07-12"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog
        ],
        tech: [
            ProjectTech.Webflow,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
        ]
    },
    {
        title: "ICPNC",
        imgSrc: icpncThumbnail,
        description: "The ICPNC brings together leading practitioners in child protection to enhance Canadian organizations’ capacity to ensure results-oriented, innovative and effective child protection programming.",
        url: "https://www.icpnc.org",
        publishDate: new Date("2020-10-05"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog,
            ProjectFeature.Localization,
            ProjectFeature.Newsletter,
        ],
        tech: [
            ProjectTech.Webflow,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.ProjectManager,
        ]
    },
    {
        title: "SMART MRP",
        imgSrc: smartWebsiteThumbnail,
        description: "SMART is a shop management and resource tool that helps manufacturers and distributors manage their shop floor and resources.",
        repoUrl: "https://github.com/JoshElias/smart-website",
        url: "https://www.smartmrp.com",
        publishDate: new Date("2017-05-12"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.VideoHosting,
            ProjectFeature.Blog
        ],
        tech: [
            ProjectTech.Angular2,
            ProjectTech.AWS
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager
        ]
    },
    {
        title: "AVA Product Suite",
        imgSrc: autocorpThumbnail,
        description: "Autocorp provides high converting commerce tools for forward thinking dealers that fast tracks your online deal & financing process.",
        url: "https://www.autocorp.ai",
        publishDate: new Date("2019-06-11"),
        type: ProjectType.SaaS,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.LeadGen,
            ProjectFeature.UserManagement,
        ],
        tech: [
            ProjectTech.React,
            ProjectTech.NextJS,
            ProjectTech.Postgres,
            ProjectTech.AWS,
            ProjectTech.NodeJS,
            ProjectTech.Express,
            ProjectTech.Docker,
        ],
        roles: [
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner
        ]
    },
    {
        title: "Car Loans Canada",
        url: "https://web.archive.org/web/20191007192100/https://www.carloanscanada.com/",
        description: "Find out what vehicles you're eligible for today.",
        imgSrc: clcWebsiteThumbnail,
        publishDate: new Date("2018-03-15"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog,
            ProjectFeature.LeadGen,
            ProjectFeature.VideoHosting,
        ],
        tech: [
            ProjectTech.Gatsby,
            ProjectTech.React,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner,
        ]
    },
    {
        title: "Car Loans Canada Credit Application",
        url: "https://apply.carloanscanada.com/",
        description: "A multi-step credit application for Car Loans Canada.",
        imgSrc: clcAppThumbnail,
        publishDate: new Date("2018-05-13"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.LeadGen,
        ],
        tech: [
            ProjectTech.Gatsby,
            ProjectTech.React,
            ProjectTech.AWS,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner,
        ]
    },
    {
        title: "Daemon Technology",
        url: "https://web.archive.org/web/20180822083745/https://daemontechnology.com/",
        description: "My original company website with a little too much personality.",
        repoUrl: "https://github.com/JoshElias/daemon_technology_2018",
        publishDate: new Date("2018-08-22"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.Portfolio,
            ProjectFeature.LeadGen,
        ],
        tech: [
            ProjectTech.Angular2,
            ProjectTech.AWS,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
        ]
    },
    {
        title: "Tempostorm Website",
        url: "https://www.tempostorm.com/",
        description: "Tempostorm is a website for esports news and content.",
        repoUrl: "https://github.com/JoshElias/esports-website",
        imgSrc: tempoWebsiteThumbnail,
        publishDate: new Date("2015-08-17"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.LeadGen,
            ProjectFeature.UserManagement,
            ProjectFeature.Newsletter,
            ProjectFeature.CMS,
            ProjectFeature.Blog,
        ],
        tech: [
            ProjectTech.Angular1,
            ProjectTech.LoopbackJS,
            ProjectTech.MongoDB,
            ProjectTech.NodeJS,
            ProjectTech.Express,
        ],
        roles: [
            ProjectRole.Backend,
            ProjectRole.ProjectManager,
        ]
    },
    {
        title: "Deck Builder",
        url: "https://tempostorm.com/hearthstone/sealed-generator",
        description: "A deck builder for Hearthstone made for Redbull Tournaments.",
        repoUrl: "https://github.com/JoshElias/esports-website",
        imgSrc: tempoDraftThumbnail,
        publishDate: new Date("2016-02-03"),
        type: ProjectType.Game,
        features: [
            ProjectFeature.UserManagement,
        ],
        tech: [
            ProjectTech.LoopbackJS,
            ProjectTech.Angular1,
            ProjectTech.MongoDB,
            ProjectTech.NodeJS,
            ProjectTech.Express,
        ],
        roles: [
            ProjectRole.Backend,
        ]
    },
    {
        title: "Spark Screens",
        url: "https://web.archive.org/web/20180218184619/http://sparkscreens.com/",
        description: "A kiosk platform built with Unity3D and Android Studio",
        repoUrl: "https://github.com/JoshElias/esports-website",
        imgSrc: sparkWebsiteThumbnail,
        publishDate: new Date("2012-01-17"),
        type: ProjectType.Game,
        features: [
            ProjectFeature.UserManagement,
        ],
        tech: [
            ProjectTech.LoopbackJS,
            ProjectTech.Angular1,
            ProjectTech.MongoDB,
            ProjectTech.NodeJS,
            ProjectTech.Express,
        ],
        roles: [
            ProjectRole.Backend,
        ]
    }
].map((project) => {
    return {
        ...project,
        id: slugify(project.title)
    }
}) as Project[];