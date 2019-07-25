module.exports = {
    devServer: {
        proxy: {
             '/api': {
                target: 'http://localhost:8080',
                 ws: true
              },
            '/services': {
                target: 'http://localhost:8080',
                ws: true
            }, '/management': {
                target: 'http://localhost:8080',
                ws: true
            }, '/swagger-resources': {
                target: 'http://localhost:8080',
                ws: true
            }, '/v2/api-docs': {
                target: 'http://localhost:8080',
                ws: true
            }, '/h2-console': {
                target: 'http://localhost:8080',
                ws: true
            }, '/auth': {
                target: 'http://localhost:8080',
                ws: true
            }
        }
    },
    runtimeCompiler : true
};
