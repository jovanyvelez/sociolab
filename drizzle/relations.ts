import { relations } from "drizzle-orm/relations";
import { temas, respuestasFallidas, preguntas, estudiantes } from "./schema";

export const respuestasFallidasRelations = relations(respuestasFallidas, ({one}) => ({
	tema: one(temas, {
		fields: [respuestasFallidas.idTema],
		references: [temas.idTema]
	}),
	pregunta: one(preguntas, {
		fields: [respuestasFallidas.idPregunta],
		references: [preguntas.idPregunta]
	}),
	estudiante: one(estudiantes, {
		fields: [respuestasFallidas.idEstudiante],
		references: [estudiantes.idEstudiante]
	}),
}));

export const temasRelations = relations(temas, ({many}) => ({
	respuestasFallidas: many(respuestasFallidas),
}));

export const preguntasRelations = relations(preguntas, ({many}) => ({
	respuestasFallidas: many(respuestasFallidas),
}));

export const estudiantesRelations = relations(estudiantes, ({many}) => ({
	respuestasFallidas: many(respuestasFallidas),
}));