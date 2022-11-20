/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      keyframes: {
        'bounce-custom': {
          '0%': {
            transform: 'translateY(-200px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(100px)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'slide-custom':  {
          '0%': {
            transform: 'translateX(-24%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(24%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          },
          '100%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'bounce-custom': 'bounce-custom 1s 1',
        'slide-custom': 'slide-custom 1s 1',
        'spin-custom': 'spin 1s 1'
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ]
}
