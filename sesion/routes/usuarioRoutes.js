import express from "express";
const router = express.Router();
//si quiero tener diferentes tipos de html responses con un mismo destino "un mismo /" se hace asi
router
  .route("/prueba")
  .get((req, res) => {
    res.send("hola mundo en express desde /prueba");
  })
  .post((req, res) => {
    res.json({ mensaje: "este es un mensaje tipo post desde /prueba" });
  });


export default router;
