import cors from "cors";
import express from "express";

const APP = express();

APP.use(cors(), express.json())

APP.listen(3001, () => {
    console.log("Backend started on port 3001")
})