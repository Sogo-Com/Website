-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Valeur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL DEFAULT '',
    "photo" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "rang" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Valeur" ("description", "id", "photo", "titre") SELECT "description", "id", "photo", "titre" FROM "Valeur";
DROP TABLE "Valeur";
ALTER TABLE "new_Valeur" RENAME TO "Valeur";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
