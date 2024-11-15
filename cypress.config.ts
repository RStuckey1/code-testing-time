import { defineConfig } from 'cypress';
// import customViteConfig from './vite.config';
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
    },
 
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      // viteConfig: customViteConfig
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },
});
