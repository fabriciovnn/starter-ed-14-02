-- CreateTable
CREATE TABLE "lojas" (
    "cnpj" VARCHAR(100) NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "segmento" VARCHAR(100) DEFAULT 'alimentação',
    "endereco" TEXT NOT NULL,
    "telefone" VARCHAR(100),
    "quantidade_de_filiais" INTEGER NOT NULL,
    "data_de_abertura" TIMESTAMP NOT NULL,

    CONSTRAINT "lojas_pkey" PRIMARY KEY ("cnpj")
);

-- CreateTable
CREATE TABLE "fornecedores" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "avaliacao" INTEGER NOT NULL,
    "criado_em" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP NOT NULL,

    CONSTRAINT "fornecedores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lojas_cnpj_key" ON "lojas"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "fornecedores_email_key" ON "fornecedores"("email");
