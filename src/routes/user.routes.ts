import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { LoginController } from "../modules/users/useCases/login/LoginController";
import { VerifyTokenController } from "../modules/users/useCases/verifyToken/verifyTokenController";
import {GetAllUsersController} from "../modules/users/useCases/getAllUsers/GetAllUsersController";
import {GetAllController} from "../modules/users/useCases/getAll/GetAllController";
import {GetUserController} from "../modules/users/useCases/getUser/GetUserController";


import { Router } from "express";

const createUserController = new CreateUserController();
const login = new LoginController();
const verifyTokenController = new VerifyTokenController();
const getAllUsersController = new GetAllUsersController();
const getAllController = new GetAllController();
const getUserController = new GetUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/login", login.handle);
userRoutes.post("/token", verifyTokenController.handle);
userRoutes.get("/api/:type", getAllUsersController.handle);
userRoutes.get("/all", getAllController.handle);
userRoutes.get("/:id", getUserController.handle);

export { userRoutes };
