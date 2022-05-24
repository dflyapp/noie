-- CreateTable
CREATE TABLE "todo" (
    "id" STRING NOT NULL,
    "task" STRING NOT NULL,
    "done" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" STRING NOT NULL DEFAULT E'gen_random_uuid()',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" STRING,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);
