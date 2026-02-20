import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "var(--color-brand-navy)",
          navy2: "var(--color-brand-navy-2)",
          coral: "var(--color-brand-coral)",
          coralHover: "var(--color-brand-coral-hover)",
        },
        surface: {
          base: "var(--color-bg)",
          soft: "var(--color-bg-soft)",
          card: "var(--color-card)",
        },
        text: {
          strong: "var(--color-text)",
          muted: "var(--color-text-muted)",
          onDark: "var(--color-text-on-dark)",
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
      },
      maxWidth: {
        content: "var(--maxw)",
      },
    },
  },
  plugins: [],
} satisfies Config;
