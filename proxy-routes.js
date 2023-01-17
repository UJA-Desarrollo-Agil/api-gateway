const ROUTES = [
    {
        url: '/personas',
        proxy: {
            target: "http://localhost:8001",
            changeOrigin: true,
            pathRewrite: {
                [`^/personas`]: '',
            },
        }
    },
    {
        url: '/proyectos',

        proxy: {
            target: "http://localhost:8002",
            changeOrigin: true,
            pathRewrite: {
                [`^/proyectos`]: '',
            },
        }
    }
]

exports.routes = ROUTES;