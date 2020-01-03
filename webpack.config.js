module.exports = {
    devServer: {
        port: 4000,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}