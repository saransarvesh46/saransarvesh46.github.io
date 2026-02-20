module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#0ea5e9',
          hover: '#0284c7',
          muted: 'rgba(14, 165, 233, 0.06)',
        },
        panel: {
          DEFAULT: '#0c0c14',
          elevated: '#111119',
        },
        line: {
          DEFAULT: '#1a1a2e',
          hover: '#252540',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(14, 165, 233, 0.12)',
        card: '0 1px 3px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 0 0 1px rgba(14, 165, 233, 0.08), 0 8px 40px rgba(14, 165, 233, 0.05)',
        elevated: '0 0 0 1px rgba(14, 165, 233, 0.04), 0 20px 64px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
