import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: "class", // important!
    content: [
        './index.html',
        './src/**/*.{ts,tsx,js,jsx,html}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
