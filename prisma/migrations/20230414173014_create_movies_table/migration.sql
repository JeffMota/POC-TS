-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "plataform" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "watched" BOOLEAN NOT NULL DEFAULT false,
    "note" DECIMAL,
    "resume" TEXT,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
