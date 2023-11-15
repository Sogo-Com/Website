-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nom" TEXT NOT NULL,
    "typeClient" TEXT NOT NULL DEFAULT '',
    "typeDomaine" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Client" ("createdAt", "id", "nom", "typeClient") SELECT "createdAt", "id", "nom", "typeClient" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
