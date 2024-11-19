-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Estudiantes` (
	`id_estudiante` integer PRIMARY KEY,
	`nombre` text NOT NULL,
	`correo` text NOT NULL,
	`grado` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Profesores` (
	`id_profesor` integer PRIMARY KEY,
	`nombre` text NOT NULL,
	`correo` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Temas` (
	`id_tema` integer PRIMARY KEY,
	`preguntas` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `Respuestas_Fallidas` (
	`id_pregunta_fallida` integer PRIMARY KEY,
	`id_estudiante` integer NOT NULL,
	`id_pregunta` integer NOT NULL,
	`id_tema` integer NOT NULL,
	FOREIGN KEY (`id_tema`) REFERENCES `Temas`(`id_tema`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_pregunta`) REFERENCES `Preguntas`(`id_pregunta`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_estudiante`) REFERENCES `Estudiantes`(`id_estudiante`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `Preguntas` (
	`id_pregunta` integer PRIMARY KEY AUTOINCREMENT,
	`enunciado` text NOT NULL,
	`opciones` text NOT NULL,
	`respuesta_correcta` text NOT NULL
);

*/