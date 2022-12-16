module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounceTop 0.9s both',
        scaleUpTop: 'scaleUpTop 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both',
        explosion: 'explosion 6s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both',
        scaleOut: 'scaleOut 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      keyframes: {
        bounceTop: {
          '0%': {
            transform: 'translateY(-45px)',
            'animation-timing-function': 'ease-in',
            opacity: 1,
          },
          '24%': {
            opacity: 1,
          },
          '40%': {
            transform: 'translateY(-24px)',
            'animation-timing-function': 'ease-in',
          },
          '65%': {
            transform: 'translateY(-12px)',
            'animation-timing-function': 'ease-in',
          },
          '82%': {
            transform: 'translateY(-6px)',
            'animation-timing-function': 'ease-in',
          },
          '93%': {
            transform: 'translateY(-4px)',
            'animation-timing-function': 'ease-in',
          },
          '25%, 55%, 75%, 87%': {
            transform: 'translateY(0px)',
            'animation-timing-function': 'ease-out',
          },
          '100%': {
            transform: 'translateY(0px)',
            'animation-timing-function': 'ease-out',
            opacity: 1,
          },
        },
        scaleUpTop: {
          '0%': {
            transform: 'scale(0.7) transformY(0)',
            'transform-origin': '50% 0%',
            opacity: 1,
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '90%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(0.5, 0.5) translateY(250px)',
            'transform-origin': '50% 0%',
            opacity: 0,
          },
        },
        explosion: {
          '0%': {
            transform: 'translateY(0) translateX(0) scale(0)',
            opacity: 0,
          },
          '45%': {
            transform: 'translateY(0) translateX(0) scale(0)',
            opacity: 0,
          },
          '50%': {
            transform: 'translateY(var(--y-distance)) translateX(var(--x-distance)) scale(1)',
            opacity: 1,
          },
          '60%': {
            transform: 'translateY(var(--y-distance)) translateX(var(--x-distance)) scale(1)',
            opacity: 0,
          },
          '90%': {
            transform: 'translateY(0) translateX(0) scale(0)',
            opacity: 0,
          },
          '99%': {
            transform: 'translateY(var(--y-distance)) translateX(var(--x-distance)) scale(1)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(var(--y-distance)) translateX(var(--x-distance)) scale(1)',
            opacity: 0,
          },
        },
        scaleOut: {
          '0%': {},
          '100%': {
            margin: 0,
            'border-radius': 0,
            width: '100%',
            height: '100%',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
