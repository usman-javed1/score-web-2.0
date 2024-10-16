/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#131313",
        backgroundLight: "#181829",
        tint: "#4305F3",
        socialLoginButtonBg: "#E8E8E8",
        text: "#3B3B3B",
        textGray: "#919191",
        userMsgBg: "#EEDFB9",
        botMsgBg: "#474747",
        darkBg: "#1f1f1f",
        msgText: "#1A1C1C",
        dummyMsgContainer: "#474747",
        grayCustom: "#676767", 
        darkGrayCustom: "#232627", 
        icon: "#ACADB9",
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root': {
          '--background-dark': theme('colors.backgroundDark'),
          '--background-light': theme('colors.backgroundLight'),
          '--tint': theme('colors.tint'),
          '--social-login-button-bg': theme('colors.socialLoginButtonBg'),
          '--text': theme('colors.text'),
          '--text-gray': theme('colors.textGray'),
          '--user-msg-bg': theme('colors.userMsgBg'),
          '--bot-msg-bg': theme('colors.botMsgBg'),
          '--dark-bg': theme('colors.darkBg'),
          '--msg-text': theme('colors.msgText'),
          '--dummy-msg-container': theme('colors.dummyMsgContainer'),
          '--gray-custom': theme('colors.grayCustom'),
          '--dark-gray-custom': theme('colors.darkGrayCustom'),
          '--icon': theme('colors.icon'),
        },
      });
    },
  ],
};
