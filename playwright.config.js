module.exports = {
  testDir: './tests',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { open: 'never' }]],
};