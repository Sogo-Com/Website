/*
  Warnings:

  - You are about to drop the column `ficher` on the `CommuniquePresse` table. All the data in the column will be lost.
  - You are about to drop the column `ficher` on the `DossierPresse` table. All the data in the column will be lost.
  - Added the required column `fichier` to the `CommuniquePresse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fichier` to the `DossierPresse` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CommuniquePresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "fichier" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "CommuniquePresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CommuniquePresse" ("clientId", "createdAt", "id", "titre") SELECT "clientId", "createdAt", "id", "titre" FROM "CommuniquePresse";
DROP TABLE "CommuniquePresse";
ALTER TABLE "new_CommuniquePresse" RENAME TO "CommuniquePresse";
CREATE TABLE "new_DossierPresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "fichier" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "DossierPresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DossierPresse" ("clientId", "createdAt", "id", "titre") SELECT "clientId", "createdAt", "id", "titre" FROM "DossierPresse";
DROP TABLE "DossierPresse";
ALTER TABLE "new_DossierPresse" RENAME TO "DossierPresse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
