require("module-alias/register");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.SERVERPORT || 3010;

const app = express();
const { passport } = require("./src/middleware/auth");
const docentesController = require("./src/controllers/docentes-controller");
const cursosController = require("./src/controllers/cursos-controller");
const ccrsController = require("./src/controllers/ccrs-controller");
const horariosController = require("./src/controllers/horarios-controller");
const anoSemestreController = require("./src/controllers/ano-semestre-controller");
const ofertasController = require("./src/controllers/ofertas-controller");
const usuariosController = require("./src/controllers/usuarios-controller");
const authController = require("./src/controllers/auth-controller");
const publicController = require("./src/controllers/public-controller");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(helmet());
app.use(morgan("combined"));
app.use(passport.initialize());

app.listen(port, () => console.log(`Servidor rodando na porta ${port}.`));

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
