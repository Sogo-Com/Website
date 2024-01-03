/*
  Warnings:

  - You are about to drop the `DomaineClient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `typeDomaine` on the `Client` table. All the data in the column will be lost.
  - Added the required column `domaineId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DomaineClient";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "photoLogo" TEXT NOT NULL DEFAULT '',
    "photoAvant1" TEXT NOT NULL DEFAULT '',
    "photoAvant2" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "domaineId" TEXT NOT NULL,
    CONSTRAINT "Client_domaineId_fkey" FOREIGN KEY ("domaineId") REFERENCES "Domaine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("createdAt", "id", "nom", "photoAvant1", "photoAvant2", "photoLogo") SELECT "createdAt", "id", "nom", "photoAvant1", "photoAvant2", "photoLogo" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
