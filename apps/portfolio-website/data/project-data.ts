import { Project, ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../lib/types";


import clcAppThumbnail from "@/public/images/clc_app/clc_app_thumbnail.jpg";
import tempoWebsiteThumbnail from "@/public/images/tempo_website/tempo_website_thumbnail.jpg";
import tempoDraftThumbnail from "@/public/images/tempo_draft/tempo_draft_thumbnail.jpg";
import sparkWebsiteThumbnail from "@/public/images/spark/spark_thumbnail.jpg";
import daemonTechWebsiteThumbnail from "@/public/images/daemon_technology/daemon_technology_thumbnail.jpg";


export default [


    
    
    {
        title: "Daemon Technology",
        url: "https://web.archive.org/web/20180822083745/https://daemontechnology.com/",
        description: "My original company website with a little too much personality.",
        imgSrc: daemonTechWebsiteThumbnail,
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