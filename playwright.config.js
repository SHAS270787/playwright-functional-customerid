// @ts-check
const { defineConfig } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  timeout: 30 * 1000,
  reporter: 'list',

  webServer: {
    command: 'node server.js',  // your server start command
    port: 3000,
    reuseExistingServer: !process.env.CI,  // reuse if local, always start in CI
  },
});
