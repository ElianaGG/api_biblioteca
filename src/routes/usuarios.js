const express = require("express");
const router = express.Router();

const {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuarioController");

// GET /usuarios: Devuelve la lista completa de usuarios.
router.get("/", getAllUsuarios);

// GET /usuarios/:id: Devuelve los detalles de un usuario específico según su ID.
router.get("/:id", getUsuarioById);

// POST /usuarios: Crea un nuevo usuario con la información proporcionada.
router.post("/", createUsuario);

// PUT /usuarios/:id: Actualiza la información de un usuario específico según su ID.
router.put("/:id", updateUsuario);

// DELETE /usuarios/:id: Elimina un usuario específico según su ID.
router.delete("/:id", deleteUsuario);

module.exports = router;
