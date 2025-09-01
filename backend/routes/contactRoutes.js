import express from "express";
import { sendContactEmail } from "../controller/contactController.js";


let contactRouter = express.Router();

contactRouter.post("/", sendContactEmail);

export default contactRouter;