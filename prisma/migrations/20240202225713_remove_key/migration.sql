/*
  Warnings:

  - You are about to drop the column `key` on the `ExpertiseOnglet` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExpertiseOnglet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cssClass" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoPrincipale" TEXT NOT NULL,
    "rang" INTEGER NOT NULL
);
INSERT INTO "new_ExpertiseOnglet" ("cssClass", "description", "id", "photoPrincipale", "rang", "titre") SELECT "cssClass", "description", "id", "photoPrincipale", "rang", "titre" FROM "ExpertiseOnglet";
DROP TABLE "ExpertiseOnglet";
ALTER TABLE "new_ExpertiseOnglet" RENAME TO "ExpertiseOnglet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
