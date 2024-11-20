import express from "express";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
   
}

export default routes;