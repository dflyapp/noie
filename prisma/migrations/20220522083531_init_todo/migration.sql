-- CreateTable
CREATE TABLE "todo" (
    "id" STRING NOT NULL,
    "task" STRING NOT NULL,
    "done" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
