import React, { useState } from 'react';
import { Grid, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import { SendButton, StyledInput } from './styles';
import { PatternFormat } from 'react-number-format';

export default function EmailForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID) return;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', whatsapp: '', message: '' });
      })
      .catch(() => setError(true));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <StyledInput
            label="Nome"
            name="name"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={6}>
          <StyledInput
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={6}>
          <PatternFormat
            customInput={StyledInput}
            label="WhatsApp"
            name="whatsapp"
            required
            format="(##) #####-####"
            mask="_"
            fullWidth
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={12}>
          <StyledInput
            label="Mensagem"
            placeholder="Mensagem"
            name="message"
            multiline
            rows={3}
            fullWidth
            required
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={12} display="flex" justifyContent="flex-end">
          <SendButton type="submit">Enviar</SendButton>
        </Grid>
      </Grid>
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Mensagem enviada com sucesso!</Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert severity="error">Erro ao enviar mensagem. Tente novamente.</Alert>
      </Snackbar>
    </form>
  );
}
