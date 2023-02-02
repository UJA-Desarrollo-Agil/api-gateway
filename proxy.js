// Creación de un objeto de tipo PROXY que reescribe las llamadas servidor/proyectos, servidor/personas, etc.
const { createProxyMiddleware } = require('http-proxy-middleware');

const setupProxies = (app, routes) => {
    // Las rutas que va creando se encuentran en proxy-routes.js
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

exports.setupProxies = setupProxies
