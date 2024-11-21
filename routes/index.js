import express from "express";
import UsuariosRoutes from "./Usuarios.routes.js";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('', UsuariosRoutes);
   
}

export default routes;