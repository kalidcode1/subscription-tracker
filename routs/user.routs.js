import { Router } from "express";
import {getUsers, getUser} from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const userRouter = Router();

// GET /user => to get all users 
// GET /user:id => get the user bu there id(there are also other methods)

userRouter.get('/' ,getUsers);

userRouter.get('/:id' , authorize, getUser);

userRouter.post('/' , (req,res) => res.send({title: 'CREATE new user'}));

userRouter.put('/:id' , (req,res) => res.send({title: 'update user'}));

userRouter.delete('/' , (req,res) => res.send({title: 'delete use'}));

// we add id to get, put and delete to spesify the user

export default userRouter;