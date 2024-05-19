-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "project_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "period_start" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDescription" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProjectDescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_id_project_name_key" ON "Project"("project_id", "project_name");

-- AddForeignKey
ALTER TABLE "ProjectDescription" ADD CONSTRAINT "ProjectDescription_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
