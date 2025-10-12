"use server";

import { Resend } from 'resend';

// Inicializamos Resend con nuestra API key
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Este es un remitente por defecto de Resend para pruebas
      to: 'rig@rigquiropractico.cl', // ¡CÁMBIALO por tu email verificado!
      subject: `Nuevo Mensaje de Contacto de ${name}`,
      react: (
        <div>
          <h1>Nuevo mensaje desde tu página web</h1>
          <p><strong>Nombre:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>{message}</p>
        </div>
      ),
    });
    return { success: true, message: '¡Mensaje enviado con éxito!' };
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return { success: false, message: 'Hubo un error al enviar el mensaje.' };
  }
};