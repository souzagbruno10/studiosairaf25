import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Ícones de WhatsApp e Instagram
import styles from "../styles/Home.module.css";

function AgendamentoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    whats: "",
    data: "",
    hora: "",
    servico: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Para controlar a exibição do pop-up
  const [message, setMessage] = useState(""); // Para armazenar a mensagem de confirmação

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formatWhatsApp = (whats) => {
    return `(${whats.slice(0, 2)}) ${whats.slice(2, 7)}-${whats.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/agendamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          `Agendamento confirmado!\nCliente: ${formData.nome}\nWhatsApp: ${formatWhatsApp(formData.whats)}\nServiço: ${formData.servico}\nData: ${formData.data}\nHora: ${formData.hora}`
        );
        setShowPopup(true);
      } else {
        setMessage(result.message || "Erro ao realizar agendamento.");
        setShowPopup(true);
      }
    } catch (error) {
      console.error("Erro ao enviar o agendamento:", error);
      setMessage("Erro ao realizar agendamento. Tente novamente.");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className={styles.agendamentoSection}>
      <h2>Agende Seu Atendimento</h2>
      <form onSubmit={handleSubmit} className={styles.agendamentoForm}>
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome da Cliente</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="whats">WhatsApp</label>
          <input
            type="tel"
            id="whats"
            name="whats"
            value={formData.whats}
            onChange={handleChange}
            pattern="\d{11}"
            placeholder="seu número do Whatsapp"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="hora">Hora</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="servico">Serviço</label>
          <select
            id="servico"
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
          >
            <option value="">Escolha um Serviço</option>
            <option value="Design Simples">Design Simples - R$ 20,00</option>
            <option value="Design com Henna">Design com Henna - R$ 45,00</option>
            <option value="Brow Lamination">Brow Lamination - R$ 75,00</option>
            <option value="Volume Brasileiro">Volume Brasileiro - R$ 110,00</option>
            <option value="Volume Brasileiro Manutenção">Volume Brasileiro Manutenção - R$ 75,00</option>
            <option value="Volume Egípcio">Volume Egípcio - R$ 125,00</option>
            <option value="Volume Egípcio Manutenção">Volume Egípcio Manutenção - R$ 85,00</option>
            <option value="Volume 5D">Volume 5D - R$ 125,00</option>
            <option value="Volume 5D Manutenção">Volume 5D Manutenção - R$ 85,00</option>
            <option value="Volume 8D">Volume 8D - R$ 145,00</option>
            <option value="Volume 8D Manutenção">Volume 8D Manutenção - R$ 100,00</option>
            <option value="Mega Brasileiro">Mega Brasileiro - R$ 145,00</option>
            <option value="Mega Brasileiro Manutenção">Mega Brasileiro Manutenção - R$ 100,00</option>
            <option value="Mega 5D">Mega 5D - 145,00</option>
            <option value="Mega 5D Manutenção">Mega 5D Manutenção - R$ 100,00</option>
            <option value="Fox Eyes">Fox Eyes - R$ 125,00</option>
            <option value="Fox Eyes Manutenção">Fox Eyes Manutenção - R$ 85,00</option>
          </select>
        </div>
        <button type="submit" className={styles.ctaButton}>
          Confirmar Agendamento
        </button>
      </form>

      {showPopup && (
        <div className={styles.popup}>
          <h3>Confirmação do Agendamento</h3>
          <pre>{message}</pre>
          <button onClick={closePopup}>Fechar</button>
        </div>
      )}

      <div className={styles.contactSection}>
        <p>Entre em contato conosco:</p>
        <div className={styles.socialIcons}>
          <a
            href="https://wa.me/5511913512943"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} color="#25D366" />
          </a>
          <a
            href="https://www.instagram.com/studiosairaf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#C13584" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AgendamentoForm;
