module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        night: '#0b1224',
        ink: '#0f172a',
        cloud: '#e2e8f0',
        primary: '#38bdf8',
        accent: '#8b5cf6',
        amber: '#fbbf24',
      },
      boxShadow: {
        glow: '0 15px 45px -15px rgba(56, 189, 248, 0.35)',
        card: '0 20px 50px -24px rgba(0,0,0,0.55)',
      },
      backdropBlur: {
        22: '22px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  presets: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
