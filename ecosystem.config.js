module.exports = {
  apps: [
    {
      name: 'boooki-alpha',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
    },
    {
      name: 'boooki-beta',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 7000,
      },
    },
    {
      name: 'boooki',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};