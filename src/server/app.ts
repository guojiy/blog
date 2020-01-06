const Koa = require('koa');
const app = new Koa();
import ApiController from './controller/ApiController'
const Router = require('koa-router');
const router = new Router();

import Mysql from './service/MysqlService';
const mysql = new Mysql();
mysql.connect();
router.get('/api/list', async(ctx) => {
    ctx.body = await new ApiController().getWeather();
})
app.use(router.routes());
app.listen(8080, () => {
    console.log('服务启动8080');
    
})