import { Router } from "express";

const router = Router();

// GET
router.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Ruta test funcionando"
  });
});

// POST
router.post("/", (req, res) => {
  try {
    const { nombre } = req.body;

    if (!nombre) {
      return res.status(400).json({
        error: "El nombre es obligatorio"
      });
    }

    res.status(201).json({
      mensaje: "Registro creado correctamente",
      nombre
    });

  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor"
    });
  }
});

// PUT
router.put("/:id", (req, res) => {
  res.status(200).json({
    mensaje: `Registro ${req.params.id} actualizado correctamente`
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  res.status(200).json({
    codigo: "DELETE_SUCCESS",
    mensaje: `Registro ${req.params.id} eliminado correctamente`
  });
});

export default router;