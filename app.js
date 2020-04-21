const express = require("express");

const app = express();

const addVideoToQueue = require("./routes/addVideoToQueue");

process.env.SHOTSTACK_KEY = "xC4do9MDFE4ReJVwG8wSW65WG9FHKN9V7Ro3MIUc";

app.post("/addVideoToQueue", addVideoToQueue);

app.listen(4000);
