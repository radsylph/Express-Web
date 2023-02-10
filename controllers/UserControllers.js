import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Registerscreen = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/main/index.html"));
};

const Loginscreen = (req, res) => {
  if (req.session.logged) {
    res.sendFile(path.join(__dirname, "../public/Logged/logged.html"));
  } else {
    res.send({ message: "You are not logged" });
  }
};

export { Registerscreen, Loginscreen };
