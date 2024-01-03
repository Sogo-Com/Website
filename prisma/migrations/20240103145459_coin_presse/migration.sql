/*
  Warnings:

  - You are about to drop the `ClientAttachePresse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ClientAttachePresse";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_AttachePresseToClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AttachePresseToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "AttachePresse" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AttachePresseToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AttachePresseToClient_AB_unique" ON "_AttachePresseToClient"("A", "B");

-- CreateIndex
CREATE INDEX "_AttachePresseToClient_B_index" ON "_AttachePresseToClient"("B");
