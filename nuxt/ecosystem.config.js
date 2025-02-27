// pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'book-store',
      exec_mode: 'cluster',
      instances: '1',
      env: {
        PORT: 30012,
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
      script: './.output/server/index.mjs',
    },
  ],
};
