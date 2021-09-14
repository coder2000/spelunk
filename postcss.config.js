module.exports = {
  plugins: [
    require("postcss-preset-env")({
      stage: 2,
      features: {
        "nesting-rules": true,
      },
    }),
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
