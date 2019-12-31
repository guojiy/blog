import * as Router from 'koa-router';
import { route, GET } from 'awilix-koa';
import User from "../model/User";

@route('/')
@route("/index")
export default class IndexController {
    indexService: any
    constructor({indexService}) {
        this.indexService = indexService;
    }
    @route('/')
    @GET()
    private async index(
        ctx: Router.IRouterContext,
        next:() => Promise<any>
    ): Promise<any> {
        const result: User = await this.indexService.getUser("1");
        ctx.body = await ctx.render("index", {data: result.email})
    }
}