import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/scss/main.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
