import express from "express";
import router from "./routes/app.js";
const app = express();

//parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// movies api routes
app.use("/movie", router);

export default app;