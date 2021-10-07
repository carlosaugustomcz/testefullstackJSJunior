import { Router } from "express";
import { createUserController } from "../useCases/createUser";
import { listAllUserController } from "../useCases/listAllUser";
import { listUserController } from "../useCases/listUser";





const usersRoutes = Router();


usersRoutes.post("/", (request, response) => {

  return createUserController.handle(request, response);
  
});

usersRoutes.get("/", (request, response) => {

  return listAllUserController.handle(request, response);
  
});

usersRoutes.get("/:id", (request, response) => {

  return listUserController.handle(request, response);
  
});

usersRoutes.put("/:id", (request, response) => {

  return 
})

export { usersRoutes };