require("module-alias/register");
require("dotenv").config({ path: "../.env" });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const { passport } = require("./middleware/auth");
const docentesController = require("./controllers/docentes-controller");
const cursosController = require("./controllers/cursos-controller");
const ccrsController = require("./controllers/ccrs-controller");
const horariosController = require("./controllers/horarios-controller");
const anoSemestreController = require("./controllers/ano-semestre-controller");
const ofertasController = require("./controllers/ofertas-controller");
const usuariosController = require("./controllers/usuarios-controller");
const authController = require("./controllers/auth-controller");
const publicController = require("./controllers/public-controller");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(helmet());
app.use(morgan("combined"));
app.use(passport.initialize());

app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

// Rotas públicas (sem autenticação)
app.use("/api/public", publicController);

// Rotas protegidas (com autenticação)
app.use("/api/ccrs", ccrsController);
app.use("/api/cursos", cursosController);
app.use("/api/docentes", docentesController);
app.use("/api/horarios", horariosController);
app.use("/api/ano-semestre", anoSemestreController);
app.use("/api/ofertas", ofertasController);
app.use("/api/usuarios", usuariosController);
app.use("/api/auth", authController);
