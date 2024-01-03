/*
  Warnings:

  - The primary key for the `ClientAttachePresse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ClientAttachePresse` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClientAttachePresse" (
    "clientId" TEXT NOT NULL,
    "attachePresseId" TEXT NOT NULL,

    PRIMARY KEY ("clientId", "attachePresseId"),
    CONSTRAINT "ClientAttachePresse_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ClientAttachePresse_attachePresseId_fkey" FOREIGN KEY ("attachePresseId") REFERENCES "AttachePresse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClientAttachePresse" ("attachePresseId", "clientId") SELECT "attachePresseId", "clientId" FROM "ClientAttachePresse";
DROP TABLE "ClientAttachePresse";
ALTER TABLE "new_ClientAttachePresse" RENAME TO "ClientAttachePresse";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
