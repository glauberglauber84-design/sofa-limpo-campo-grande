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
        whatsapp: '#25D366',
        whatsappEscuro: '#1ebe5a',
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
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06)',
        cardHover: '0 6px 20px rgba(42,127,186,0.18)',
      },
    },
  },
  plugins: [],
};
