// pm2 start pm2.config.js

module.exports = {
  apps: [
    {
      name: "marianaagency",
      script: "npx",
      args: "serve -s build",
      env: {
        PORT: 5101
      }
    }
  ]
};
