import { CreateTypeController } from "../modules/type_user/useCases/createType/CreateTypeController";

import { Router } from "express";

const createAdminController = new CreateTypeController();


const typeRoutes = Router();

typeRoutes.post("/", createAdminController.handle);

export { typeRoutes };
