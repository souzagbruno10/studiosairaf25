import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { FaHome, FaUser, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import Head from "next/head";

export default function Valores() {
  const router = useRouter();
  const [flipped, setFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/designSimples.jpg",
      valor: " R$ 20,00",
      nome: " Design Simples",
    },
    {
      src: "/images/designhenna45.jpg",
      valor: " R$ 45,00",
      nome: " Design com Henna",
    },
    {
      src: "/images/browLamination75.jpg",
      valor: " R$ 75,00",
      nome: " Brow Lamination",
    },
    {
      src: "/images/volumeBrasileiro110.jpg",
      valor: " R$ 110,00",
      nome: " Volume Brasileiro",
    },
    {
      src: "/images/volumeEgipcio125.jpg",
      valor: " R$ 125,00",
      nome: " Volume Egípcio",
    },
    {
      src: "/images/volume5D125.jpg",
      valor: " R$ 125,00",
      nome: " Volume 5D",
    },
    {
      src: "/images/volume8D145.jpg",
      valor: " R$ 145,00",
      nome: " Volume 8D",
    },
    {
      src: "/images/megaBr145.jpg",
      valor: " R$ 145,00",
      nome: " Mega Brasileiro",
    },
    {
      src: "/images/mega5D145.jpg",
      valor: " R$ 145,00",
      nome: " Mega 5D",
    },
    {
      src: "/images/foxEyes125.jpg",
      valor: " R$ 125,00",
      nome: " Fox Eyes",
    },
    {
      src: "/images/pagamento.jpg",
      valor: " sua satisfação! ",
      nome: " Agende já 🖤",
    },
  ];

  const handleFlip = () => {
    setFlipped(true); // Vira o card imediatamente

    setTimeout(() => {
      setFlipped(false); // Depois de 4 segundos, desvira o card

      // Assim que desvirar, já muda a imagem imediatamente
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Head>
        {" "}
        <link
          href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAZtn/AP///wAAv/8Aqur/AEA/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFAAAAAAAAAAAAAAAABQUDAwUFAAAAAAAAAAAABQMDAwMDAwUAAAAAAAAFBQMDAwMDAwMDBQUAAAAFAwMDAQEBAQEBAwMDBQAFAwEBAQEBAQEBAQEBAQMFBQQBAQEBAQEBAQEBAQEBBQUEAgIBAQEBAQEBAQEBAQUFBAICAQEBBQUBAQEBAQEFAAUEBAQBBQAABQEBAQEFAAAABQUFBQAAAAAFBQUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP5/AAD4HwAA8A8AAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAIGBAADDwwAA//8AAP//AAA="
          rel="icon"
          type="image/x-icon"
        ></link>
        <title>Valores</title>
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
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon} onClick={() => router.push("/")}>
            <FaHome size={30} color="#ffd700" />
          </div>
          <div
            className={styles.icon}
            onClick={() => router.push("/agendamento")}
          >
            <FaCalendarAlt size={30} color="#ffd700" />
          </div>

          <div
            className={styles.icon}
            onClick={() => router.push("/quemSouEu")}
          >
            <FaUser size={30} color="#ffd700" />
          </div>
          <div className={styles.icon} onClick={() => router.push("/valores")}>
            <FaDollarSign size={30} color="#ffd700" />
          </div>
        </div>
      </header>

      <section className={styles.valoresSection}>
        <div className={styles.valoresText}>
          <h2>Valores & Serviços</h2>
          <p>Clique na imagem para ver os valores! 😊</p>
        </div>

        <div className={styles.flipContainer} onClick={handleFlip}>
          <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
            <div className={styles.cardFront}>
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].nome}
                width={300}
                height={300}
                className={styles.roundedImage}
              />
            </div>
            <div className={styles.cardBack}>
              <p>
                {images[currentImageIndex].nome} - Valor:{" "}
                {images[currentImageIndex].valor}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.valoresFooter}>
        <p>© 2025 Studio Sairaf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
