-- CreateTable
CREATE TABLE "images" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" STRING,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
