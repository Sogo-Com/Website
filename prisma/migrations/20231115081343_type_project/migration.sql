-- CreateTable
CREATE TABLE "Projet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "typeProjet" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "photoLogo" TEXT NOT NULL DEFAULT '',
    "descriptionCourte" TEXT NOT NULL DEFAULT '',
    "contenu" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
