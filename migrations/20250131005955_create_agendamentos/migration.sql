-- CreateTable
CREATE TABLE agendamentos (
    id INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(191) NOT NULL,
    data DATETIME(3) NOT NULL,
    hora VARCHAR(191) NOT NULL,
    servico VARCHAR(191) NOT NULL,

    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
