/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#09090b", // zinc-950
                glass: "rgba(255, 255, 255, 0.1)",
                glassBorder: "rgba(255, 255, 255, 0.2)",
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            },
            backdropBlur: {
                'xl': '24px',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-custom': 'bounce 1.5s infinite',
            }
        },
    },
    safelist: [
        'from-teal-400', 'to-blue-500',
        'from-rose-400', 'to-pink-500',
        'from-amber-400', 'to-orange-500',
        'from-purple-500', 'to-indigo-600'
    ],
    plugins: [],
}
