import React from "react";
import Image from "next/image"; // Importação do componente Imagem
import { useRouter } from "next/router"; // Importação do hook useRouter
import styles from "../styles/Home.module.css";
import Head from "next/head";

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/agendamento"); // Redireciona para a página de agendamento
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
        <title> Studio Sairaf</title>
        <meta
          name="description"
          content="Beleza e liberdade com Studio Sairaf."
        />
      </Head>

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
          {/* Texto "Beleza & Liberdade" */}
          <p className={styles.subTitle}>Beleza & Liberdade</p>
        </div>
      </header>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h2>Realçando Sua Beleza Natural</h2>
          <p>
            Especialistas em design de sobrancelhas, estamos aqui para valorizar
            sua expressão e confiança. Descubra um atendimento personalizado e
            uma experiência única!
          </p>
          <button className={styles.ctaButton} onClick={handleClick}>
            Saiba Mais
          </button>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/giStudio.png"
            alt="" // Caminho correto da imagem
            width={300}
            height={300}
            className={styles.roundedImage}
          />
        </div>
      </section>
      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2>Nossos Serviços</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Design de Sobrancelhas e Extensão de Cílios</h3>
            <p>
              Transformamos suas sobrancelhas e cílios com técnicas precisas e
              personalizadas para realçar sua beleza.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Henna</h3>
            <p>
              Aplique henna para sobrancelhas perfeitas, duradouras e cheias de
              vida.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Manutenção</h3>
            <p>
              Cuidamos da manutenção regular para manter suas sobrancelhas
              impecáveis.
            </p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
