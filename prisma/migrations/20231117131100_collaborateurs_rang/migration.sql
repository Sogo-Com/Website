-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Collaborateur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prenom" TEXT NOT NULL,
    "descriptionCourte" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "photoInactive" TEXT NOT NULL DEFAULT '',
    "photoActive" TEXT NOT NULL DEFAULT '',
    "rang" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Collaborateur" ("createdAt", "description", "descriptionCourte", "id", "photoActive", "photoInactive", "prenom") SELECT "createdAt", "description", "descriptionCourte", "id", "photoActive", "photoInactive", "prenom" FROM "Collaborateur";
DROP TABLE "Collaborateur";
ALTER TABLE "new_Collaborateur" RENAME TO "Collaborateur";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
