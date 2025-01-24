import React from "react";
import { FaHome, FaUser, FaDollarSign } from "react-icons/fa"; // Importando os ícones de Home e Quem sou Eu
import { useRouter } from "next/router"; // Importando o hook useRouter
import AgendamentoForm from "../components/AgendamentoForm"; // Importe o formulário de agendamento
import styles from "../styles/Home.module.css"; // Reaproveitar os estilos
import Head from "next/head";

export default function AgendamentoPage() {
  const router = useRouter(); // Inicializando o roteador

  // Funções de navegação
  const handleHomeClick = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  const handleWhoAmIClick = () => {
    router.push("/quemSouEu"); // Redireciona para a página "Quem sou Eu"
  };

  const handleDollarClick = () => {
    router.push("/servicos"); // Redireciona para a página de serviços ou qualquer outra página que você queira
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <Head>
        <link
          href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAZtn/AP///wAAv/8Aqur/AEA/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFAAAAAAAAAAAAAAAABQUDAwUFAAAAAAAAAAAABQMDAwMDAwUAAAAAAAAFBQMDAwMDAwMDBQUAAAAFAwMDAQEBAQEBAwMDBQAFAwEBAQEBAQEBAQEBAQMFBQQBAQEBAQEBAQEBAQEBBQUEAgIBAQEBAQEBAQEBAQUFBAICAQEBBQUBAQEBAQEFAAUEBAQBBQAABQEBAQEFAAAABQUFBQAAAAAFBQUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP5/AAD4HwAA8A8AAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAIGBAADDwwAA//8AAP//AAA="
          rel="icon"
          type="image/x-icon"
        ></link>
        <title>Agendamento</title>
      </Head>
      ;
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>
            Studio
            {/* Ícone de Coração entre "Studio" e "Sairaf" */}
            <span className={styles.heartIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#ffd700"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            Sairaf
          </h1>
        </div>

        {/* Ícones abaixo do logo */}
        <div className={styles.iconContainer}>
          <div className={styles.icon} onClick={handleHomeClick}>
            <FaHome size={30} color="#ffd700" />
          </div>
          <div className={styles.icon} onClick={handleWhoAmIClick}>
            <FaUser size={30} color="#ffd700" />
          </div>
          <div className={styles.icon} onClick={handleDollarClick}>
            <FaDollarSign size={30} color="#ffd700" />{" "}
            {/* Adicionando o ícone de cifrão */}
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>Agende Seu Atendimento</h2>
          <p>
            Agora é o momento de reservar o seu atendimento e experimentar uma
            transformação única. Escolha o serviço que mais combina com você e
            agende já.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/giStudio.png"
            alt=""
            width={300}
            height={300}
            className={styles.roundedImage}
          />
        </div>
      </section>
      {/* Informações sobre os Serviços */}
      <section className={styles.servicesSection}>
        <h2>Sobre Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>
              <strong>Sobrancelhas</strong>
            </h3>
            <p>Design Simples, Design com Henna e Brow Lamination</p>
            <ul>
              <li>
                <strong>Design Simples</strong>: Design feito a mão livre,
                observando todos os seus fios naturais para melhor harmonização
                do seu olhar. Feito com auxílio de pinça e navalha.
              </li>
              <br />

              <li>
                <strong>Design com Henna</strong>: A Henna preenche falhas dos
                fios com a tintura que combina melhor com você. Dura em média de
                uma a duas semanas.{" "}
              </li>
              <br />

              <li>
                <strong>Brow Lamination</strong>:Processo de alisamento dos fios
                das sobrancelhas, deixando mais alinhadas e definidas. Dura de
                quatro a oito semanas.{" "}
              </li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>
              <strong>Extensão de Cílios - Tradicional</strong>
            </h3>

            <p>
              Volume Brasileiro, Volume Egípcio, Mega Brasileiro, Mega 5D,
              Volume 5D e Volume 8D
            </p>
            <ul>
              <li>
                <strong>Volume Brasileiro</strong>: Aplicação fio a fio,
                utilizando fios sintéticos com forma de Y. Manutenção de quinze
                a vinte dias.
              </li>
              <br />

              <li>
                <strong>Volume Egípcio</strong>: Aplicação fio a fio ,
                utilizando fios sintéticos com forma de W. Manutenção de quinze
                a vinte dias.
              </li>
              <br />

              <li>
                <strong>Mega Brasileiro</strong>: Aplicação fio a fio,
                utilizando fios sintéticos com forma de Y. Para cada cílio
                natural, aplica-se dois sintéticos.
              </li>
              <br />

              <li>
                <strong>Mega 5D</strong>: Aplicação fio a fio. Para cada cílio
                natural, aplica-se dois fios sintéticos com 5 pontas.
              </li>
              <br />

              <li>
                <strong>Volume 5D</strong>: Aplicação fio a fio. Para cada cílio
                natural, aplica-se dois fios sintéticos com 5 pontas. Manutenção
                de quinze a vinte dias.{" "}
              </li>
              <br />

              <li>
                <strong>Volume 8D</strong>: Aplicação fio a fio. Para cada cílio
                natural, aplica-se um fio sintético com 8 pontas. Manutenção de
                quinze a vinte dias.
              </li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>
              <strong>Extensão de Cílios - Gringo</strong>
            </h3>
            <p>
              <strong>Fox Eyes</strong>
            </p>
            <ul>
              <li>
                Aplicação fio a fio, utilizando fios sintéticos com forma de Y
                ou I na curvatura L ou LM. Para cada cílio natural, aplica-se um
                sintético. Manutenção de quinze a vinte dias.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Formulário de Agendamento */}
      <section className={styles.agendamentoSection}>
        <AgendamentoForm />
      </section>
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
