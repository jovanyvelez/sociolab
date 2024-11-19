import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const estudiantes = sqliteTable("Estudiantes", {
	idEstudiante: integer("id_estudiante").primaryKey(),
	nombre: text().notNull(),
	correo: text().notNull(),
	grado: integer().notNull(),
});

export const profesores = sqliteTable("Profesores", {
	idProfesor: integer("id_profesor").primaryKey(),
	nombre: text().notNull(),
	correo: text().notNull(),
});

export const temas = sqliteTable("Temas", {
	idTema: integer("id_tema").primaryKey(),
	preguntas: text().notNull(),
});

export const respuestasFallidas = sqliteTable("Respuestas_Fallidas", {
	idPreguntaFallida: integer("id_pregunta_fallida").primaryKey(),
	idEstudiante: integer("id_estudiante").notNull().references(() => estudiantes.idEstudiante),
	idPregunta: integer("id_pregunta").notNull().references(() => preguntas.idPregunta),
	idTema: integer("id_tema").notNull().references(() => temas.idTema),
});

export const preguntas = sqliteTable("Preguntas", {
	idPregunta: integer("id_pregunta").primaryKey({ autoIncrement: true }),
	enunciado: text().notNull(),
	opciones: text().notNull(),
	respuestaCorrecta: text("respuesta_correcta").notNull(),
});

export const usuarios = sqliteTable("usuarios", {
	id: integer().primaryKey(),
	username: text().notNull(),
	correo: text().notNull(),
	password: text().notNull(),
	token: text().notNull(),
});

