require("module-alias/register");
require('dotenv').config({ path: '../.env' })

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


const app = express();
const docentesService = require("./services/docentes-service");
const cursosService = require("./services/cursos-service");
const ccrsService = require("./services/ccrs-service");
const horariosService = require("./services/horarios-service");
const anoSemestreService = require("./services/ano-semestre-service");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(helmet());
app.use(morgan("combined"));


app.listen(3010, () => console.log("Servidor rodando na porta 3010."));

app.get("/", (req, res) => {
	res.send("Hello, world!");
});

app.use("/api/ccrs", ccrsService);
app.use("/api/cursos", cursosService);
app.use("/api/docentes", docentesService);
app.use("/api/horarios", horariosService);
app.use("/api/ano-semestre", anoSemestreService);