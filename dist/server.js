import express, { json } from "express";
import router from "./routes/routes.js";
var server = express();
server.use(json());
server.use(router);
server.listen(5000, function () { return console.log("Running on port 5000..."); });
