import express from "express";
import UsuariosRoutes from "./Usuarios.routes.js";
import HorarioRoutes from "./Horario.routes.js";
import PrecioRoutes from "./Precio.routes.js";
import PromocionRoutes from "./Promocion.routes.js";
import SugerenciasRoutes from "./Sugerencias.routes.js";
import TerminalRoutes from "./Terminal.routes.js";
import BoletoRoutes from "./Boleto.routes.js";

function routes(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('', UsuariosRoutes);
    router.use('', HorarioRoutes);
    router.use('', PrecioRoutes);
    router.use('', PromocionRoutes);
    router.use('', SugerenciasRoutes);
    router.use('', TerminalRoutes);
    router.use('', BoletoRoutes);
   
}

export default routes;