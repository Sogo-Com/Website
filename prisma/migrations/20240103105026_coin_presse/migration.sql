/*
  Warnings:

  - You are about to drop the column `typeClient` on the `Client` table. All the data in the column will be lost.
  - Added the required column `rang` to the `ExpertiseIcon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rang` to the `ExpertiseOnglet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Domaine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DomaineClient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "domaineId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "DomaineClient_domaineId_fkey" FOREIGN KEY ("domaineId") REFERENCES "Domaine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DomaineClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ClientAttachePresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientId" TEXT NOT NULL,
    "attachePresseId" TEXT NOT NULL,
    CONSTRAINT "ClientAttachePresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClientAttachePresse_attachePresseId_fkey" FOREIGN KEY ("attachePresseId") REFERENCES "AttachePresse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AttachePresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "typeDomaine" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "photoLogo" TEXT NOT NULL DEFAULT '',
    "photoAvant1" TEXT NOT NULL DEFAULT '',
    "photoAvant2" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Client" ("createdAt", "id", "nom", "typeDomaine") SELECT "createdAt", "id", "nom", "typeDomaine" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE TABLE "new_ExpertiseIcon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photoIconActive" TEXT NOT NULL,
    "photoIconInactive" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoIllustration" TEXT NOT NULL,
    "isVideo" BOOLEAN NOT NULL DEFAULT false,
    "rang" INTEGER NOT NULL,
    "expertiseOngletId" TEXT,
    CONSTRAINT "ExpertiseIcon_expertiseOngletId_fkey" FOREIGN KEY ("expertiseOngletId") REFERENCES "ExpertiseOnglet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ExpertiseIcon" ("description", "expertiseOngletId", "id", "isVideo", "photoIconActive", "photoIconInactive", "photoIllustration", "titre") SELECT "description", "expertiseOngletId", "id", "isVideo", "photoIconActive", "photoIconInactive", "photoIllustration", "titre" FROM "ExpertiseIcon";
DROP TABLE "ExpertiseIcon";
ALTER TABLE "new_ExpertiseIcon" RENAME TO "ExpertiseIcon";
CREATE TABLE "new_ExpertiseOnglet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "class" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoPrincipale" TEXT NOT NULL,
    "rang" INTEGER NOT NULL
);
INSERT INTO "new_ExpertiseOnglet" ("class", "description", "id", "key", "photoPrincipale", "titre") SELECT "class", "description", "id", "key", "photoPrincipale", "titre" FROM "ExpertiseOnglet";
DROP TABLE "ExpertiseOnglet";
ALTER TABLE "new_ExpertiseOnglet" RENAME TO "ExpertiseOnglet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
