import { CreateBankDataController } from "../modules/bankData/useCases/createBankData/CreateBankDataController";
import { DeleteBankDataController } from "../modules/bankData/useCases/deleteBankData/deleteBankDataController";
import { UpdateBankDataController } from "../modules/bankData/useCases/updateBankData/updateBankDataController";
import { GetBankDataController } from "../modules/bankData/useCases/getBankData/GetBankDataController";
import { GetAllBankDataController } from "../modules/bankData/useCases/getAllBankData/GetAllBankDataController";

import { Router } from "express";

const createBankDataController = new CreateBankDataController();
const deleteBankDataController = new DeleteBankDataController();
const updateBankDataController = new UpdateBankDataController();
const getBankDataController = new GetBankDataController();
const getAllBankDataController = new GetAllBankDataController();

const bankDataRoutes = Router();

bankDataRoutes.post("/", createBankDataController.handle);
bankDataRoutes.delete("/delete", deleteBankDataController.handle);
bankDataRoutes.put("/update", updateBankDataController.handle);
bankDataRoutes.get("/", getAllBankDataController.handle);
bankDataRoutes.get("/bankdata", getBankDataController.handle);

export { bankDataRoutes };
