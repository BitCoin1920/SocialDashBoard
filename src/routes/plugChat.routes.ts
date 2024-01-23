import { CreatePlugChatController } from "../modules/plugChat/useCases/createPlugChat/CreatePlugChatController";
import { DeletePlugChatController } from "../modules/plugChat/useCases/deletePlugChat/deletePlugChatController";
import { UpdatePlugChatController } from "../modules/plugChat/useCases/updatePlugChat/updatePlugChatController";
import { UpdatePlugChatResponsibleController } from "../modules/plugChat/useCases/updatePlugChatResponsible/updatePlugChatResponsibleController";
import { GetAllPlugChatController } from "../modules/plugChat/useCases/getAllPlugChat/GetPlugChatController";
import { GetPlugChatController } from "../modules/plugChat/useCases/getPlugChat/GetPlugChatController";

import { Router } from "express";

const createPlugChatController = new CreatePlugChatController();
const deletePlugChatController = new DeletePlugChatController();
const updatePlugChatController = new UpdatePlugChatController();
const updatePlugChatResponsibleController =
  new UpdatePlugChatResponsibleController();
const getAllPlugChatController = new GetAllPlugChatController();
const getPlugChatController = new GetPlugChatController();

const plugChatRoutes = Router();

plugChatRoutes.post("/", createPlugChatController.handle);
plugChatRoutes.delete("/delete", deletePlugChatController.handle);
plugChatRoutes.put("/update", updatePlugChatController.handle);
plugChatRoutes.patch("/update/responsavel", updatePlugChatResponsibleController.handle);
plugChatRoutes.get("/", getAllPlugChatController.handle);
plugChatRoutes.get("/plugchat/:id", getPlugChatController.handle);

export { plugChatRoutes };
