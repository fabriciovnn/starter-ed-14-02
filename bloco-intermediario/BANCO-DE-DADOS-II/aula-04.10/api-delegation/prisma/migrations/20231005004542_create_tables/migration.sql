-- CreateTable
CREATE TABLE "criminals" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "birth_date" TIMESTAMP NOT NULL,
    "cpf" VARCHAR(11),
    "gender" VARCHAR(100) NOT NULL,
    "rg" VARCHAR(13),
    "cnh" VARCHAR(20),
    "description" VARCHAR(255),
    "address" VARCHAR(255),
    "create_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP NOT NULL,

    CONSTRAINT "criminals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" UUID NOT NULL,
    "type" INTEGER,
    "caliber" DOUBLE PRECISION NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "serial_number" VARCHAR(100),
    "length" DOUBLE PRECISION,
    "weight" DOUBLE PRECISION,
    "description" VARCHAR(255),
    "create_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP NOT NULL,
    "crime_id" UUID NOT NULL,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "crime_date" TIMESTAMP NOT NULL,
    "article" VARCHAR(100) NOT NULL,
    "severity" INTEGER NOT NULL,
    "victims" VARCHAR(150) NOT NULL,
    "address" VARCHAR(255),
    "create_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP NOT NULL,
    "criminal_id" UUID NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "criminals_cpf_key" ON "criminals"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "criminals_rg_key" ON "criminals"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "weapons_crime_id_key" ON "weapons"("crime_id");

-- AddForeignKey
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_crime_id_fkey" FOREIGN KEY ("crime_id") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminal_id_fkey" FOREIGN KEY ("criminal_id") REFERENCES "criminals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
