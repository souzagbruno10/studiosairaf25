-- CreateTable
CREATE TABLE "agendamentos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "servico" TEXT NOT NULL,

    CONSTRAINT "agendamentos_pkey" PRIMARY KEY ("id")
);
