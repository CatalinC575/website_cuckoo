/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--color-border))", /* gray-200 */
        input: "hsl(var(--color-input))", /* gray-200 */
        ring: "hsl(var(--color-ring))", /* green-500 */
        background: "hsl(var(--color-background))", /* gray-50 */
        foreground: "hsl(var(--color-foreground))", /* gray-900 */
        primary: {
          DEFAULT: "hsl(var(--color-primary))", /* green-500 */
          foreground: "hsl(var(--color-primary-foreground))", /* white */
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))", /* blue-600 */
          foreground: "hsl(var(--color-secondary-foreground))", /* white */
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))", /* cyan-500 */
          foreground: "hsl(var(--color-accent-foreground))", /* white */
        },
        success: {
          DEFAULT: "hsl(var(--color-success))", /* green-500 */
          foreground: "hsl(var(--color-success-foreground))", /* white */
        },
        warning: {
          DEFAULT: "hsl(var(--color-warning))", /* amber-400 */
          foreground: "hsl(var(--color-warning-foreground))", /* gray-900 */
        },
        error: {
          DEFAULT: "hsl(var(--color-error))", /* red-500 */
          foreground: "hsl(var(--color-error-foreground))", /* white */
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))", /* red-500 */
          foreground: "hsl(var(--color-destructive-foreground))", /* white */
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))", /* gray-100 */
          foreground: "hsl(var(--color-muted-foreground))", /* gray-500 */
        },
        card: {
          DEFAULT: "hsl(var(--color-card))", /* white */
          foreground: "hsl(var(--color-card-foreground))", /* gray-900 */
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))", /* white */
          foreground: "hsl(var(--color-popover-foreground))", /* gray-900 */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}