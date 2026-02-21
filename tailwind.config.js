/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#CC0000",    /* Rojo Stitch */
                secondary: "#1A1A1A",
                accent: "#F9F9F7",     /* Fondo crema de formularios */
                gold: "#C5A059",       /* Subtítulo ELECTRICAL SERVICES */
                orange: "#e2703a",     /* Iconos y acentos de tarjetas */
                surface: "#F0F4FF",    /* Fondos de sección con gradiente azul */
                success: "#008A00",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
