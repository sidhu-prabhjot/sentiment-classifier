// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // specify the endpoint to proxy
    createProxyMiddleware({
      target: "http://127.0.0.1:4000", // specify the address of your Python server
      changeOrigin: true,
    })
  );
};
