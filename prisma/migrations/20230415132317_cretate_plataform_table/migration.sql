/*
  Warnings:

  - You are about to drop the column `plataform` on the `movies` table. All the data in the column will be lost.
  - Added the required column `plataformId` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "plataform",
ADD COLUMN     "plataformId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "plataforms" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "plataforms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_plataformId_fkey" FOREIGN KEY ("plataformId") REFERENCES "plataforms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
