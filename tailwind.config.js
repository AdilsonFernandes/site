/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/bg.jpg)',
        bgIcon: 'url(/icons/icon-seta.png)',
        bgCard: 'url(/bgCard.jpg)',
        bgCasa: 'url(/imoveis/casa.jpg)',
        bgAp: 'url(/imoveis/apartamento.jpg)',
        bgComercial: 'url(/imoveis/comercial.jpg)',
        bgLote: 'url(/imoveis/lote.jpg)',
      },
boxShadow:{
  dark:' 1px 1px 10px 1px grey'
},
      dropShadow: {
        dark: '2px 2px 1px black',
      }

    },
  },
  plugins: [],
}
