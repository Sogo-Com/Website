-- CreateTable
CREATE TABLE "PageAgence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "citation" TEXT NOT NULL DEFAULT '',
    "valeurDescription" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "Valeur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);
