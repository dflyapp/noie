-- CreateTable
CREATE TABLE "images" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" STRING,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
