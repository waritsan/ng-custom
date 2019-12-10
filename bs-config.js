module.exports = {
    server: {
        baseDir: './dist',
        middleware: {
            1: require('conntect-history-api-fallback')({ index: './index.html', verbose: true })
        }
    }
}