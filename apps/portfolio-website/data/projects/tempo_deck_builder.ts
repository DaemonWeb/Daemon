import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import draftMain from "@/public/images/tempo_draft/tempo_draft_main.jpg";
import tempoThumbnail from "@/public/images/tempo_draft/tempo_draft_thumbnail.jpg";
import gallery1 from "@/public/images/tempo_draft/tempo_draft_gallery_1.jpg";
import gallery2 from "@/public/images/tempo_draft/tempo_draft_gallery_2.jpg";
import gallery3 from "@/public/images/tempo_draft/tempo_draft_gallery_3.jpg";


export const title = "Deck Builder";
export const liveUrl = "https://tempostorm.com/hearthstone/sealed-generator";
export const description = "A deck builder for Hearthstone made for Redbull Tournaments.";
export const repoUrl = "https://github.com/JoshElias/esports-website";
export const mainImg = draftMain;
export const thumbnailImg = tempoThumbnail;
export const publishDate = new Date("2016-02-03");
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

export const gallery = [
    gallery1,
    gallery2,
    gallery3,
];