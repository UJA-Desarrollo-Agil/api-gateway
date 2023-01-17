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
    },
    {
        url: '/favicon.ico',
        proxy: {
            target: "/static-files/img/favico.ico",
        },

    },
]

exports.routes = ROUTES;