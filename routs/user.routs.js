import { Router } from "express";

const userRouter = Router();

// GET /user => to get all users 
// GET /user:id => get the user bu there id(there are also other methods)

userRouter.get('/' , (req,res) => res.send({title: 'GET all users'}));

userRouter.get('/:id' , (req,res) => res.send({title: 'GET  users details'}));

userRouter.post('/' , (req,res) => res.send({title: 'CREATE new user'}));

userRouter.put('/:id' , (req,res) => res.send({title: 'update user'}));

userRouter.delete('/' , (req,res) => res.send({title: 'delete use'}));

// we add id to get, put and delete to spesify the user

export default userRouter;