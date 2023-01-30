import { Project, ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../lib/types";


import clcAppThumbnail from "@/public/images/clc_app/clc_app_thumbnail.jpg";
import tempoWebsiteThumbnail from "@/public/images/tempo_website/tempo_website_thumbnail.jpg";
import tempoDraftThumbnail from "@/public/images/tempo_draft/tempo_draft_thumbnail.jpg";
import sparkWebsiteThumbnail from "@/public/images/spark/spark_thumbnail.jpg";
import daemonTechWebsiteThumbnail from "@/public/images/daemon_technology/daemon_technology_thumbnail.jpg";


export default [
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