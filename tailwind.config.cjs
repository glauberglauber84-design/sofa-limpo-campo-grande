/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primaria: {
          DEFAULT: '#2a7fba',
          escura: '#1f5f8c',
          clara: '#4a9ad5',
        },
        bgsuave: '#f4f8fb',
        texto: '#1a1a1a',
        // Verde WhatsApp header (brand dark) — 6.6:1 com texto branco, AA com folga.
        whatsapp: '#075E54',
        // Hover ainda mais escuro.
        whatsappEscuro: '#054942',
        // Verde WhatsApp vivo (#25D366) — SOMENTE decorativo (float icon, dots,
        // chips sem texto). NÃO use como fundo de botão com texto.
        whatsappClaro: '#25D366',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      // Escala modular 1.25 (16 -> 20 -> 25 -> 31 -> 39 -> 49)
      // Line-height: 1.5-1.65 em body/texto, 1.1-1.3 em titulos.
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }], // 12
        sm: ['0.875rem', { lineHeight: '1.55' }], // 14
        base: ['1rem', { lineHeight: '1.6' }], // 16
        lg: ['1.125rem', { lineHeight: '1.5' }], // 18 (intermediario)
        xl: ['1.25rem', { lineHeight: '1.4' }], // 20
        '2xl': ['1.5625rem', { lineHeight: '1.3' }], // 25
        '3xl': ['1.9375rem', { lineHeight: '1.2' }], // 31
        '4xl': ['2.4375rem', { lineHeight: '1.15' }], // 39
        '5xl': ['3.0625rem', { lineHeight: '1.1' }], // 49
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      maxWidth: {
        content: '1200px',
        prose: '65ch',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06)',
        cardHover: '0 6px 20px rgba(42,127,186,0.18)',
      },
    },
  },
  plugins: [],
};
