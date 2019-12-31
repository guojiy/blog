const Koa = require('koa');
import config from './config/index'
import loadMiddleware from "./middleware/loadMiddleware"
const app = new Koa();

loadMiddleware(app);

app.listen(config.port, () => {
    console.log(`server listen on port ${config.port}`)
})