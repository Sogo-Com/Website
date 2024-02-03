/*
  Warnings:

  - You are about to drop the column `class` on the `ExpertiseOnglet` table. All the data in the column will be lost.
  - Added the required column `cssClass` to the `ExpertiseOnglet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExpertiseOnglet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cssClass" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoPrincipale" TEXT NOT NULL,
    "rang" INTEGER NOT NULL
);
INSERT INTO "new_ExpertiseOnglet" ("description", "id", "key", "photoPrincipale", "rang", "titre") SELECT "description", "id", "key", "photoPrincipale", "rang", "titre" FROM "ExpertiseOnglet";
DROP TABLE "ExpertiseOnglet";
ALTER TABLE "new_ExpertiseOnglet" RENAME TO "ExpertiseOnglet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
