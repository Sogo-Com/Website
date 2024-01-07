-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT 'Aucune description',
    "photoLogo" TEXT NOT NULL DEFAULT '',
    "photoAvant1" TEXT NOT NULL DEFAULT '',
    "photoAvant2" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "domaineId" TEXT NOT NULL,
    CONSTRAINT "Client_domaineId_fkey" FOREIGN KEY ("domaineId") REFERENCES "Domaine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("createdAt", "domaineId", "id", "nom", "photoAvant1", "photoAvant2", "photoLogo") SELECT "createdAt", "domaineId", "id", "nom", "photoAvant1", "photoAvant2", "photoLogo" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
