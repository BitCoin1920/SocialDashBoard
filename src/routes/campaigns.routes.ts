import { CreateCampaignController } from "../modules/campaigns/useCases/createCampaign/CreateCampaignController";
import { GetCampaignController } from "../modules/campaigns/useCases/getCampaign/GetCampaignController";
import { DropCampaignController } from "../modules/campaigns/useCases/dropCategory/DropCampaignController";


import { Router } from "express";

const createCampaignController = new CreateCampaignController();
const getCampaignController = new GetCampaignController();
const dropCampaignController = new DropCampaignController();


const campaignsRoutes = Router();

campaignsRoutes.post("/", createCampaignController.handle);
campaignsRoutes.get("/", getCampaignController.handle);
campaignsRoutes.delete("/", dropCampaignController.handle);

export { campaignsRoutes };
