import { CreateStatusController } from "../modules/status/useCases/createStatus/CreateStatusController";
import { GetStatusController } from "../modules/status/useCases/getStatus/GetStatusController";


import { Router } from "express";

const createInfluencerController = new CreateStatusController();
const getStatusController = new GetStatusController();


const statusRoutes = Router();

statusRoutes.post("/", createInfluencerController.handle);
statusRoutes.get("/", getStatusController.handle);

export { statusRoutes };
