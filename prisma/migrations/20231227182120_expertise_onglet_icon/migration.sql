-- CreateTable
CREATE TABLE "ExpertiseOnglet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "class" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoPrincipale" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ExpertiseIcon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photoIconActive" TEXT NOT NULL,
    "photoIconInactive" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoIllustration" TEXT NOT NULL,
    "isVideo" BOOLEAN NOT NULL DEFAULT false,
    "expertiseOngletId" TEXT NOT NULL,
    CONSTRAINT "ExpertiseIcon_expertiseOngletId_fkey" FOREIGN KEY ("expertiseOngletId") REFERENCES "ExpertiseOnglet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
