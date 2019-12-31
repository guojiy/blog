const path = require('path');

const config = {
    viewDir: path.resolve(__dirname, '../views'),
    staticDir: path.resolve(__dirname, '../public'),
    env: process.env.NODE_ENV,
    port: 8080
}
// config.port = config.env === 'development' ? 8080 : 80;
export default config;