import { Router } from "express";

import { classesRoutes } from "./influencer.routes";
import { profileScrapingRoutes } from "./hastag.routes";
import { typeRoutes } from "./type_user.routes";
import { userRoutes } from "./user.routes";
import { influencersRoutes } from "./influencers.routes";
import { statusRoutes } from "./status.routes";
import { campaignsRoutes } from "./campaigns.routes";
import { bankDataRoutes } from "./bankData.routes";
import { plugChatRoutes } from "./plugChat.routes";
import { postsRoutes } from "./posts.routes";

const routes = Router();

routes.use("/influencer", classesRoutes);
routes.use("/hashtag", profileScrapingRoutes);
routes.use("/type", typeRoutes);
routes.use("/users", userRoutes);
routes.use("/influencers", influencersRoutes);
routes.use("/status", statusRoutes);
routes.use("/bankdata", bankDataRoutes);
routes.use("/plugchat", plugChatRoutes);
routes.use("/posts", postsRoutes);
routes.use("/campaigns", campaignsRoutes);

export { routes };
