import { Router } from "express";
import { productModel, userModel } from "../db/db.js";
import jwt from "jsonwebtoken";
import { auth } from "../middleware/auth.js";
import dotenv from 'dotenv';

const userRouter = Router();

dotenv.config();

const JWT_SECRET_KEY:any=process.env.JWT_SECRET_KEY;



userRouter.post("/signup", async (req, res) => {
  const {userName,password}=req.body;
  
  try {
    await userModel.create({
      userName,
      password,
    });
      res.status(200).json({
        message: "user id created successfully",
      });

  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { userName, password } = req.body;
  try {                                                     
    const user = await userModel.findOne({
      userName,
      password,
    });
    if (user) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY);
      res.status(200).json({
        token: token,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});

userRouter.post("/products", auth, async (req, res) => {
  const userId = req.userId;
  const {image, sellerId , title, description, price, category } = req.body;

  try {
    const postProduct = await productModel.create({
     image,
     sellerId:userId,
     title,
     description,
     price,
     category
    });
    if (postProduct){
      res.status(200).json({
        message: "product added ",
      }); 
    }
  } catch (err) {
    message: "error at product post ";
  }
});

userRouter.get("/products", auth, async (req, res) => {
  const  userId  = req.userId;
  try {
    const products = await productModel.find({sellerId:userId 
    },{ });

    if (products) {
      res.status(200).json({
        products
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});

userRouter.put("/products", auth, async (req, res) => {
});

userRouter.delete("/products", auth, async (req, res) => {
  const userId = req.userId;
  const { documentId } = req.body;

  console.log(" Delete request for:", documentId, "by user:", userId);

  try {
    const removed = await productModel.findByIdAndDelete({_id:documentId });
    if (!removed) {
      return res.status(404).json({ message: "Record not found or unauthorized" });
    }

    res.status(200).json({ message: "products removed successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});


export { userRouter };
