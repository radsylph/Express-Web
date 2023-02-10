import express from "express";
const router = express.Router();
import { Registerscreen, Loginscreen } from "../controllers/UserControllers.js";
router.get("/", Registerscreen);

const users = new Map();
router.get("/prueba", (req, res) => {
  res.send("hola mundo en express desde /prueba");
});

router.post("/registerUser", (req, res) => {
  users.set(req.body.email, req.body.password);
  res.send({ message: "User added successfully" });
  console.log("created");
});

router.post("/loginUser", (req, res) => {
  if (users.has(req.body.email)) {
    if (users.get(req.body.email) === req.body.password) {
      req.session.logged = true;
      res.send({ message: true });
    } else {
      console.log("2");
      res.send({ message: "Wrong password" });
    }
  } else {
    res.send({ message: "User not found" });
  }
});

router.get("/home", Loginscreen);

export default router;
