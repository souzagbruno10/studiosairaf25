import nodemailer from "nodemailer";

// Função para enviar e-mail
const sendEmailNotification = async (agendamento) => {
  try {
    console.log("📨 Preparando envio de e-mail...");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Testa conexão com o servidor SMTP
    await transporter.verify();
    console.log("✅ Conexão SMTP bem-sucedida!");

    const mailOptions = {
      from: `\"Agendamentos\" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL, // Pode ser configurado no .env
      subject: "Novo Agendamento Confirmado",
      text: `Novo Agendamento Confirmado\n\nNome: ${agendamento.nome}\nServiço: ${agendamento.servico}\nData: ${agendamento.data}\nHora: ${agendamento.hora}\n\nDetalhes: Este é um e-mail automático gerado após o agendamento ser realizado com sucesso.`,
    };

    console.log("📧 Enviando e-mail para:", mailOptions.to);

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ E-mail enviado com sucesso:", info.response);
  } catch (error) {
    console.error("❌ Erro ao enviar e-mail:", error);
  }
};

// API handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { nome, data, hora, servico } = req.body;

  if (!nome || !data || !hora || !servico) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    // Removemos a parte do banco de dados

    const agendamento = { nome, data, hora, servico };

    // Envia a notificação por e-mail
    await sendEmailNotification(agendamento);

    console.log("✅ Agendamento confirmado!");

    // Resposta para o cliente
    return res
      .status(200)
      .json({ message: "Agendamento realizado com sucesso!" });
  } catch (err) {
    console.error("❌ Erro ao processar o agendamento:", err);
    return res.status(500).json({ message: "Erro ao processar agendamento." });
  }
}
