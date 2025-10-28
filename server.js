require("module-alias/register");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.SERVERPORT || 3010;

const app = express();
const { passport } = require("./src/middleware/auth");
const docentesResource = require("./src/resources/docentes-resource");
const cursosResource = require("./src/resources/cursos-resource");
const ccrsResource = require("./src/resources/ccrs-resource");
const horariosResource = require("./src/resources/horarios-resource");
const anoSemestreResource = require("./src/resources/ano-semestre-resource");
const ofertasResource = require("./src/resources/ofertas-resource");
const usuariosResource = require("./src/resources/usuarios-resource");
const authResource = require("./src/resources/auth-resource");
const publicResource = require("./src/resources/public-resource");

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
app.use("/api/public", publicResource);

// Rotas protegidas (com autenticação)
app.use("/api/ccrs", ccrsResource);
app.use("/api/cursos", cursosResource);
app.use("/api/docentes", docentesResource);
app.use("/api/horarios", horariosResource);
app.use("/api/ano-semestre", anoSemestreResource);
app.use("/api/ofertas", ofertasResource);
app.use("/api/usuarios", usuariosResource);
app.use("/api/auth", authResource);
