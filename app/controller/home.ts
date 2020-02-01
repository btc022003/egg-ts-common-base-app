import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('Tom');
  }

  public async demo() {
    const { ctx } = this;
    // ctx.body = '你好';
    ctx.body = await ctx.service.products.list(); // 查询数据库的数据进行展示
  }
}
