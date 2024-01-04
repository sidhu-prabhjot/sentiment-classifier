// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // specify the endpoint to proxy
    createProxyMiddleware({
      target: "https://fa99-204-237-3-28.ngrok-free.app", // specify the address of your Python server
      changeOrigin: true,
    })
  );
};
