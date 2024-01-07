-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DossierPresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "fichier" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "DossierPresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_DossierPresse" ("clientId", "createdAt", "fichier", "id", "titre") SELECT "clientId", "createdAt", "fichier", "id", "titre" FROM "DossierPresse";
DROP TABLE "DossierPresse";
ALTER TABLE "new_DossierPresse" RENAME TO "DossierPresse";
CREATE TABLE "new_CommuniquePresse" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "fichier" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "CommuniquePresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CommuniquePresse" ("clientId", "createdAt", "fichier", "id", "titre") SELECT "clientId", "createdAt", "fichier", "id", "titre" FROM "CommuniquePresse";
DROP TABLE "CommuniquePresse";
ALTER TABLE "new_CommuniquePresse" RENAME TO "CommuniquePresse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
