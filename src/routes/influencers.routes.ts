import { CreateInfluencerController } from "../modules/influencers/useCases/createInfluencer/CreateInfluencerController";
import { DeleteInfluencerController } from "../modules/influencers/useCases/deleteInfluencer/deleteInfluencerController";
import { UpdateInfluencerController } from "../modules/influencers/useCases/updateInfluencer/updateInfluencerController";
import { UpdateInfluencerStatusController } from "../modules/influencers/useCases/updateInfluencerStatus/updateInfluencerController";
import { UpdateInfluencerStatusCampaignController } from "../modules/influencers/useCases/updateInfluencerStatus&Campaign/updateInfluencerController";
import { UpdateInfluencerPhotoController } from "../modules/influencers/useCases/updateInfluencerPhoto/updateInfluencerPhotoController";
import { UpdateInfluencerRequestArchivingController } from "../modules/influencers/useCases/updateInfluencerRequestArchiving/updateInfluencerRequestArchivingController";
import { UpdateInfluencerObservationController  } from "../modules/influencers/useCases/updateInfluencerObservation/updateInfluencerObservationController";
import { UpdateInfluencerArchivingController } from "../modules/influencers/useCases/updateInfluencerArchiving/updateInfluencerArchivingController";
import { GetAllInfluencersController } from "../modules/influencers/useCases/getAllInfluencers/GetAllInfluencersController";
import { GetInfluencerController } from "../modules/influencers/useCases/getInfluencer/GetInfluencerController";

import { Router } from "express";

const createInfluencerController = new CreateInfluencerController();
const deleteInfluencerController = new DeleteInfluencerController();
const updateInfluencerController = new UpdateInfluencerController();
const updateInfluencerStatusController = new UpdateInfluencerStatusController();
const updateInfluencerStatusCampaignController = new UpdateInfluencerStatusCampaignController();
const updateInfluencerPhotoController = new UpdateInfluencerPhotoController();
const updateInfluencerRequestArchivingController = new UpdateInfluencerRequestArchivingController();
const updateInfluencerObservationController = new UpdateInfluencerObservationController();
const updateInfluencerArchivingController = new UpdateInfluencerArchivingController();
const getAllInfluencersController = new GetAllInfluencersController();
const getInfluencerController = new GetInfluencerController();

const influencersRoutes = Router();

influencersRoutes.post("/", createInfluencerController.handle);
influencersRoutes.delete("/delete", deleteInfluencerController.handle);
influencersRoutes.put("/update", updateInfluencerController.handle);
influencersRoutes.put("/update/status", updateInfluencerStatusController.handle);
influencersRoutes.put("/update/status/campaign", updateInfluencerStatusCampaignController.handle);
influencersRoutes.put("/update/photo", updateInfluencerPhotoController.handle);
influencersRoutes.put("/update/archiving/request", updateInfluencerRequestArchivingController.handle);
influencersRoutes.put("/update/archiving", updateInfluencerArchivingController.handle);
influencersRoutes.put("/update/observation", updateInfluencerObservationController.handle);
influencersRoutes.get("/", getAllInfluencersController.handle);
influencersRoutes.get("/influencer", getInfluencerController.handle);

export { influencersRoutes };
