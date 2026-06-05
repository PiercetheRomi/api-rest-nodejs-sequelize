import { checkDB } from "../services/health.service.js";

// Controlador que verifica la conexión con la base de datos
export const healthCheck = async (req, res, next) => {
  try {
    // Comprueba que PostgreSQL esté disponible
    await checkDB();

    // Respuesta exitosa
    res.status(200).json({
      status: "ok",
      db: "connected",
      orm: "sequelize"
    });

  } catch (error) {
    // Envía el error al middleware global
    next(error);
  }
};