/*
  Warnings:

  - You are about to drop the column `gender` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "gender";

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GendersOnMovies" (
    "movieId" INTEGER NOT NULL,
    "genderId" INTEGER NOT NULL,

    CONSTRAINT "GendersOnMovies_pkey" PRIMARY KEY ("movieId","genderId")
);

-- AddForeignKey
ALTER TABLE "GendersOnMovies" ADD CONSTRAINT "GendersOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GendersOnMovies" ADD CONSTRAINT "GendersOnMovies_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
