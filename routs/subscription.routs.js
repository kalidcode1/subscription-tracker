
import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";
import { getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router()

subscriptionRouter.get('/' , (req,res) => res.send({title: 'GET all subscriptions'}));

subscriptionRouter.get('/:id' , (req,res) => res.send({title: 'GET subscription detail'}));

subscriptionRouter.post('/' ,authorize,createSubscription);

subscriptionRouter.put('/:id' , (req,res) => res.send({title: 'UPDATE subscription'}));

subscriptionRouter.delete('/:id' , (req,res) => res.send({title: 'delete subscription'}));

subscriptionRouter.get('/user/:id' , authorize,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel' , (req,res) => res.send({title: 'cancel subscription'}));

subscriptionRouter.get('/upcoming-renewal' , (req,res) => res.send({title: 'GET upcoming renewal'}));

export default subscriptionRouter;