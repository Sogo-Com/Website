-- CreateTable
CREATE TABLE "PageExpertise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photoPrincipale" TEXT NOT NULL DEFAULT '',
    "photoSecondaire" TEXT NOT NULL DEFAULT '',
    "h2" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "PageProjet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photoPrincipale" TEXT NOT NULL DEFAULT '',
    "h2" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "PageActualite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photoPrincipale" TEXT NOT NULL DEFAULT ''
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PageAgence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "titreRose" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "citation" TEXT NOT NULL DEFAULT '',
    "valeurDescription" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_PageAgence" ("citation", "id", "photo", "titre", "valeurDescription") SELECT "citation", "id", "photo", "titre", "valeurDescription" FROM "PageAgence";
DROP TABLE "PageAgence";
ALTER TABLE "new_PageAgence" RENAME TO "PageAgence";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
