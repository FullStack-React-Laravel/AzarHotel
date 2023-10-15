/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                space: ["Space Grotesk", "sans-serif"],
            },
            colors: {
                main: "#041332f7",
                dmain: "#05122e",
            },
            backgroundImage: {
                sidebar: "linear-gradient(to right, rgb(8 42 91) 20%, #0c1a38)",
            },
        },
    },
    plugins: [],
};
