import pg from "pg";
const { Client } = pg;

const connectionData = {
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
};

const client = new Client(connectionData);

export default client;
