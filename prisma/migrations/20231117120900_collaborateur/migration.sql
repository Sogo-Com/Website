-- CreateTable
CREATE TABLE "Collaborateur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "prenom" TEXT NOT NULL,
    "descriptionCourte" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "photoInactive" TEXT NOT NULL DEFAULT '',
    "photoActive" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
