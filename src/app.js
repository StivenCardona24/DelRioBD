import express from "express";
import morgan from "morgan";

//Routes

import fincaRoutes from "./routes/farm.route";

const app = express();

//settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes 
app.use("/finca", fincaRoutes);

export default app;