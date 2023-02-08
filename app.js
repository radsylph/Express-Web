import express from "express";
import session from "express-session";
import usuarioRoutes from "./sesion/routes/usuarioRoutes.js";
import pgstore from "express-pg-session";
import pg from "pg";
import cors from "cors";
const { Client, Pool } = pg;
//import { Pool, Client } from pg;

const app = express();
const port = 3000;
const data = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123",
  port: 5432,
};

const client = new Client(data);

/*const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123",
  port: 5432,
});*/

app.use("/", usuarioRoutes);
app.use(
  session({
    secret: "contraseña",
    resave: false,
    saveUninitialized: true, //una vez que se arranque el sevidor no se vuelve a inicializar
    cookie: { temporizador: 6000,  },
    verification: true,
  })
);

app.use("/login", (req, res) => {
  if (req.session.intentos === 1) {
    req.session.verification = false;
    if(req.session.verification != true){
      res.end("<p><strong>muchas vistas mi loco</strong></p>")
    }
    else{
      res.send("intentos acabados");
    }

  } else {
    req.session.usuario = "user";
    req.session.rol = "admin";
    req.session.intentos = req.session.intentos ? --req.session.intentos: 3;
    console.log(req.session);
    res.send(
      `el usuario <strong>${req.session.usuario}</strong> es <strong>${req.session.rol}</strong> y quedan <strong>${req.session.intentos}</strong> intentos`
    );
  }
});

app.use("/", usuarioRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
