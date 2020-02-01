import { Service } from 'egg';

export default class ProductsService extends Service {
  /**
   * 查询所有的商品数据
   */
  async list() {
    const result = this.app.model.Product.find({});
    return result;
  }
}
