import { CreatePostController } from "../modules/posts/useCases/createPost/CreatePostController";
import { DropPostController } from "../modules/posts/useCases/dropPost/DropPostController";
import { UpdatedPostController } from "../modules/posts/useCases/updatedPost/UpdatedPostController";
import { GetPostsController } from "../modules/posts/useCases/getPosts/GetPostsController";
import { GetPostController } from "../modules/posts/useCases/getPost/GetPostController";

import { Router } from "express";

const createPostController = new CreatePostController();
const dropPostController = new DropPostController();
const updatedPostController = new UpdatedPostController();
const getPostsController = new GetPostsController();
const getPostController = new GetPostController();

const postsRoutes = Router();

postsRoutes.post("/", createPostController.handle);
postsRoutes.delete("/delete", dropPostController.handle);
postsRoutes.put("/update", updatedPostController.handle);
postsRoutes.get("/", getPostsController.handle);
postsRoutes.get("/post", getPostController.handle);

export { postsRoutes };
