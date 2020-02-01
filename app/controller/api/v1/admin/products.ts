import { Controller } from 'egg';

export default class ProductsController extends Controller {
  /**
   * 列表
   * get
   */
  async index() {
    const { ctx } = this;
    ctx.body = [];
  }

  /**
   * 单个
   *  /:id
   * get
   */
  async show() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '获取单条记录',
    };
  }

  /**
   * 新增
   * post
   */
  async create() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '新增成功',
      data: ctx.request.body,
    };
  }

  /**
   * 修改
   *  /:id
   * put
   */
  async update() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '修改成功',
      id: ctx.params.id,
      data: ctx.request.body,
    };
  }

  /**
   * 删除
   *  /:id
   * delete
   */
  async destroy() {
    const { ctx } = this;
    ctx.body = {
      code: 1,
      msg: '删除成功',
    };
  }
}
