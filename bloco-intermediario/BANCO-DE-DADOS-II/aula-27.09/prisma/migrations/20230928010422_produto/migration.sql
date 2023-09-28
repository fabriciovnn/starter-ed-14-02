-- CreateTable
CREATE TABLE "produto" (
    "id" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "quantidade_em_estoque" INTEGER NOT NULL,
    "tipo_do_produto" VARCHAR(100) NOT NULL,
    "criado_em" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disponivel" BOOLEAN,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);
