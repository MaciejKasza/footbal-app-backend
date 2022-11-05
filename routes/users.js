import express from "express";
import {deleteUser,updateUser,getUser,getUsers} from '../constrolers/userController.js'
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get('/checkauthtentication', verifyToken, (req,res,next)=>{
//     res.send("Hello user, you are authenticated :)")
// })

// router.get('/checkuser/:id', verifyUser, (req,res,next)=>{
//     console.log(6);
//     res.send("Hello user, you are authenticated and you can delete this account")
// })


// router.get('/checkadmin/:id', verifyUser, (req,res,next)=>{
//     console.log(6);
//     res.send("Hello admin, you are authenticated and you can delete all account")
// })
//DELETE
router.delete('/:id',verifyUser, deleteUser);
//UPDATE
router.put('/:id',verifyUser, updateUser);
//GET
router.get('/:id', verifyUser, getUser);
//GET ALL
router.get('/', verifyUser,getUsers);


export default router;