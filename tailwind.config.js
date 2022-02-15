module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      tabs: ["Poppins", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "nav-bar-bg": "#F2F2F2",
        "app-bg": "#ECECEC",
        "nav-bar-search": "#E9E9E9",
        "nav-inactive-tab-bg": "#F8F7F7",
        "nav-active-tab-bg": "#31353D",
        "body-card-color": "#FAFAFA",
        "card-border": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
