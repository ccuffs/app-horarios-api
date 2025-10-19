"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const data = [
  {
    id_curso: "1",
    codigo_docente: "ricardo.parizotto",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "padilha",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "anambasei",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "gian",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "diegohoff",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "danielle.micolodelli",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "andrei.braga",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "animarchesan",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "gabriel.guerra",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "matiello",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "edimar",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "marina",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "tainara",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "felipe.grando",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "samuel.feitosa",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "eduardomallmann",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "lucia.menoncini",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "jaqueline.sulkovski",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "asebben",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "acneri",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "braulio",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "claunir.pavan",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "dckroth",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "duarte",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "divane.marcon",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "edson.santos",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "ediovani.gaboardi",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "emilio.wuerges",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "fernando.bevilacqua",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "glaucio.fontana",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "graziela.tonin",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "guilherme.dalbianco",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "jaqueline.mecca",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "janice.reichert",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "jose.mendonca",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "joviles.trevisol",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "vitor.petry",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "rosane.binotto",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "luciana.gobi",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "rosane.binoto",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "lbordin",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "luiz.visioli",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "lcaimi",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "marco.spohn",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "mauricio",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "milton.kist",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "paulo.bosing",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "paulo.hahn",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "pericles",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "angelo.zanela",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "pedro.borges",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "raquel.pegoraro",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "rogerio.trapp",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "schreiner.geomar",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "ubi.vieira",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "stela",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "leonardorsl",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "daniloenrico",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "viviani.poyer",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "neivadaluz",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "fabiano.geremia",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "vojniak",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "lorenzon",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "marta",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "jefferson.caramori",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "caio.santos",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "neimar.assmann",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "eliane.taffarel",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "leonardo.ev",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "guillermo.orsi",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id_curso: "1",
    codigo_docente: "sem.professor",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  }
];

				await queryInterface.bulkInsert("docente_curso", data, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("docente_curso", null, {});
	},
};
