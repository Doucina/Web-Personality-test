const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");

const app = express();

var user = [
  {
    email: "admin",
    password: "changethispassword"
  }
];
app.use(cors());
const path = require("path");
app.use(express.static(path.join(__dirname, "dist/")));

app.use(
  session({
    user: "sid",
    secret: "ssh!quiet,it'asecret!", // changez cette valeur
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // ne changez que si vous avez activé le https
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/api/test", (req, res) => {
  // eslint-disable-next-line no-console
  console.log("coucou");
  res.json({
    message: "ceci est envoyé depuis l'API"
  });
});

app.get("/", function(req, res) {
  res.json({ status: "open" });
});

app.post("/api/login", (req, res) => {
  // eslint-disable-next-line no-console
  console.log("ok");
  var input = req.body;
  var info = {
    email: input.email,
    password: input.password
  };
  user.push(info);
  const element = user.find(info => info.email === input.email);
  if (element === undefined) {
    res.json({
      message: "Il n existe aucun compte associé à cette E-mail",
      connect: "false"
    });
  } else if (element.password === input.password) {
    res
      .cookie("name", "Moran", { maxAge: 24 * 60 * 60 * 1000 })
      .send("cookie set");
    res.json({ message: "connexion réussi", connect: "true" });
  } else {
    res.json({ message: "Mot de passe incorect", connect: "false" });
  }
});

app.get("/api/admin", (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  res.json({
    message: "congrats, you are connected"
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on ${port}`);
});
