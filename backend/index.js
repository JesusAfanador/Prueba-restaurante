import express from "express";
import router from "./rutas/rutaPrincipal.js";
import cors from "cors"
import { dirname } from "path";
import { fileURLToPath } from "url";
import * as path from 'path'
import dotenv from 'dotenv';
import morgan from "morgan";
dotenv.config();
const { FRONT_END } = process.env;
const app = express()

app.use(cors({
    origin: '*',}));

app.use(express.json())
app.use(morgan())
app.use('/api', router)

app.listen(3002, ()=> {
    console.log("server running on port 3002 ❤️❤️");
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use("/api",express.static(path.join(__dirname, './uploads')))
console.log(path.join(__dirname, './uploads'))