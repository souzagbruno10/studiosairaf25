import React from "react";
import { useRouter } from "next/router";
import Image from "next/image"; // Importação do componente Image
import styles from "../styles/Home.module.css"; // Reaproveitar os estilos
import { FaHome, FaUser, FaDollarSign } from "react-icons/fa"; // Importando os ícones de Home e Quem sou Eu
import Head from "next/head";

export default function QuemSouEu() {
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
        <title> Quem sou Eu</title>
      </Head>
      ;
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1>
            Studio
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
      {/* Hero Section - Quem Sou Eu */}
      <section className={styles.quemSouEuSection}>
        <div className={styles.quemSouEuText}>
          <h2>Quem Sou Eu</h2>
          <p>
            Oi, eu sou a Giovanna, apaixonada pela beleza e com o propósito de
            entregar cuidado, experiência e mais autoestima para você.
          </p>
          <p>
            Acredito que cada pessoa tem uma beleza única, e meu objetivo é
            realçar essa beleza de forma natural e duradoura. Meu compromisso é
            garantir que você saia sempre satisfeita e se sentindo ainda mais
            confiante. Seja bem vind@! Estou animada para te conhecer e te
            atender 😀.
          </p>
        </div>

        <div className={styles.quemSouEuImage}>
          <Image
            src="/giStudio2.jpg"
            overflow="hidden"
            alt="" // Caminho correto da imagem
            width={300}
            height={300}
          />
        </div>
      </section>
      {/* Footer Section */}
      <footer className={styles.quemSouEuFooter}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
