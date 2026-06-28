/**
 * Centralized Design System Theme Tokens
 * Consistently used across CSS styles and JavaScript animation layers.
 */
export const themeTokens = {
  colors: {
    accent: '#0ea5e9',
    accentHover: '#0284c7',
    accentMuted: 'rgba(14, 165, 233, 0.06)',
    panel: '#0c0c14',
    panelElevated: '#111119',
    line: '#1a1a2e',
    lineHover: '#252540',
  },
  fonts: {
    display: '"Space Grotesk", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  shadows: {
    glow: '0 0 30px rgba(14, 165, 233, 0.12)',
    card: '0 1px 3px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(0, 0, 0, 0.15)',
    cardHover: '0 0 0 1px rgba(14, 165, 233, 0.08), 0 8px 40px rgba(14, 165, 233, 0.05)',
    elevated: '0 0 0 1px rgba(14, 165, 233, 0.04), 0 20px 64px rgba(0, 0, 0, 0.25)',
  },
  glassmorphism: {
    dark: 'backdrop-blur-xl bg-[#0c0c14]/80 border border-zinc-800/60',
    light: 'backdrop-blur-xl bg-white/80 border border-zinc-200/60',
  }
};

export default themeTokens;
