
import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/' , (req,res) => res.send({title: 'GET all subscriptions'}));

subscriptionRouter.get('/:id' , (req,res) => res.send({title: 'GET subscription detail'}));

subscriptionRouter.post('/' , (req,res) => res.send({title: 'create new subscription'}));

subscriptionRouter.put('/:id' , (req,res) => res.send({title: 'UPDATE subscription'}));

subscriptionRouter.delete('/:id' , (req,res) => res.send({title: 'delete subscription'}));

subscriptionRouter.get('/user/:id' , (req,res) => res.send({title: 'GET all user subscription detail'}));

subscriptionRouter.put('/:id/cancel' , (req,res) => res.send({title: 'cancel subscription'}));

subscriptionRouter.get('/upcoming-renewal' , (req,res) => res.send({title: 'GET upcoming renewal'}));

export default subscriptionRouter;