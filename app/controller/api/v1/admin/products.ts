import { Context } from 'egg';
import BaseController from './base';

export default class ProductsController extends BaseController {
  constructor(app: Context) {
    super('products', app);
  }
}

// import { Controller } from 'egg';

// export default class ProductsController extends Controller {
//   /**
//    * 列表
//    * get
//    */
//   async index() {
//     const { ctx } = this;
//     const result = await ctx.service.products.list({});
//     ctx.body = result;
//   }

//   /**
//    * 单个
//    *  /:id
//    * get
//    */
//   async show() {
//     const { ctx } = this;
//     const result = await ctx.service.products.one(ctx.params.id);
//     ctx.body = {
//       code: 1,
//       msg: '获取单条记录',
//       data: result,
//     };
//   }

//   /**
//    * 新增
//    * post
//    */
//   async create() {
//     const { ctx } = this;
//     const result = await ctx.service.products.save(ctx.request.body);
//     ctx.body = {
//       code: 1,
//       msg: '新增成功',
//       data: result,
//     };
//   }

//   /**
//    * 修改
//    *  /:id
//    * put
//    */
//   async update() {
//     const { ctx } = this;
//     const result = await ctx.service.products.update(
//       ctx.params.id,
//       ctx.request.body,
//     );
//     ctx.body = {
//       code: 1,
//       msg: '修改成功',
//       data: result,
//     };
//   }

//   /**
//    * 删除
//    *  /:id
//    * delete
//    */
//   async destroy() {
//     const { ctx } = this;
//     const result = await ctx.service.products.deleteOne(ctx.params.id);
//     ctx.body = {
//       code: 1,
//       msg: '删除成功',
//       data: result,
//     };
//   }
// }
