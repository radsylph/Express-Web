import express from "express";
import cors from "cors";
import session from "express-session";
import router from "./router/Routes.js";
import bd from "./settings.js";
//const bd = require("./settings.js");
const app = express();

app.use(cors());
app.use(express.json());
app.set("port", 3000);
app.use(express.static("public"));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
    },
  })
);
app.use("/", router);

app.listen(app.get("port"), "", () => {
  console.log("Server is running on port: " + app.get("port"));
});

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/main/index.html'));
});*/

/*const users = new Map();
app.post('/registerUser', (req, res) => {
    users.set(req.body.email, req.body.password)
    res.send({message: 'User added successfully'})
    console.log("created")
})*/

/*app.post('/loginUser', (req, res) => {
    
    if(users.has(req.body.email)){
        if(users.get(req.body.email) === req.body.password){
            
            req.session.logged=true;
            res.send({message:true})
            
        }else{
            console.log('2')
            res.send({message: 'Wrong password'})
        } 
    } else {
        res.send({message: 'User not found'})
    }

})*/

/*app.get('/home', (req, res) => {

    if(req.session.logged){ 
        res.sendFile(path.join(__dirname,'/public/Logged/logged.html'));
    }else{
        //redirecciona pa fuera
    }

})*/
