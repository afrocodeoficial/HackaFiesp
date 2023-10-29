import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./Routes/user.js"


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);



mongoose.connect(
  "mongodb+srv://afrocode:Hacka2023@cluster0.mfvgtbt.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

);

app.listen(3001, () => console.log("Servidor iniciado!"));