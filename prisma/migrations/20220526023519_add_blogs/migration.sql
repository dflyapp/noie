-- CreateTable
CREATE TABLE "blogs" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" STRING NOT NULL,
    "slug" STRING NOT NULL,
    "description" STRING NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);
