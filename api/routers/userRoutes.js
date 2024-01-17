import express from 'express';
import  { getAllUserController, loginController, registerController }from '../controllers/userController.js';


const router=express.Router();

router.post('/register',registerController)

router.get('/all-user',getAllUserController)

router.post('/login',loginController);



export default router;
