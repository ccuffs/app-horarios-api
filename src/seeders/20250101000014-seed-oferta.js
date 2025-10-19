"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const data = [
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2025",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "10",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "1",
    id_curso: "1",
    fase: "10",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "6",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2020",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "1",
    id_curso: "1",
    fase: "10",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2021",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2022",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "8",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2023",
    semestre: "2",
    id_curso: "1",
    fase: "9",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2024",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "1",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "2",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "3",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "4",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "5",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "6",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "7",
    turno: "M",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "8",
    turno: "N",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    ano: "2026",
    semestre: "1",
    id_curso: "1",
    fase: "9",
    turno: "V",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  }
];

				await queryInterface.bulkInsert("oferta", data, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("oferta", null, {});
	},
};
