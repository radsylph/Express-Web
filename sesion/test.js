const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const { Client } = require("pg");

const data = {
  user: "postgres",
  host: "localhost",
  database: "productos",
  password: "123",
  port: 5432,
};



const client = new Client(data);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/endpoint", async (req, res) => {
  const { code } = req.body;
  if (code === 1) {
    client.connect();
    client
      .query("SELECT * FROM productos")
      .then((result) => {
        console.log(result.rows);
        client.end();
      })
      .catch((err) => {
        console.log(err);
        client.end();
      });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
