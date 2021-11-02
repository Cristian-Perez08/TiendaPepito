import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import prod from "./routes/producto.js";
dotenv.config();

const app = express();

app.use(express.json());
// reglas de conexion entre back y front
app.use(cors());
app.use("/api/prod", prod);

app.listen(process.env.PORT, () =>
    console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();
