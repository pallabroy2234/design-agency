/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        
        extend: {
            colors: {
                "primary": "#20B15A",
                "secondary": "#D7F5DC",
                "accent": "#F62B54",
                "warning": "#FFBA40",
            },
            fontFamily: {
                "poppins": "var(--font-poppins)",
                "josefin" : "var(--font-josefin)",
                "exo-pro" :"var(--font-exo-pro)"
             }
        },
    },
    plugins: [require("daisyui")],
}
