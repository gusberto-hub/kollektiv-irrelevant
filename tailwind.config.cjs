const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
    },
  },

  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
