import { Service } from 'egg';

export default class ProductsService extends Service {
  /**
   * 分页方式获取数据
   * @param query   查询条件
   * @param page    当前页码
   * @param per     每页显示的数量
   */
  async list(query: any, page = 1, per = 10) {
    const data = await this.app.model.Product.find(query)
      .limit(per)
      .skip((page - 1) * per)
      .sort({
        _id: -1,
      });
    const totalCount = await this.app.model.Product.count(query);
    return {
      totalCount,
      pages: Math.ceil(totalCount / per),
      data,
    };
  }

  /**
   * 根绝id查找单条记录
   * @param id
   */
  async one(id: string) {
    const data = await this.app.model.Product.findById(id);
    return data;
  }

  /**
   * 根据id修改单条记录
   * @param id    需要修改的id
   * @param data  数据
   */
  async update(id: string, data: any) {
    const result = await this.app.model.Product.findByIdAndUpdate(id, data, {
      upsert: true,
    });
    return result;
  }

  /**
   * 保存单条记录
   * @param data
   */
  async save(data: any) {
    const result = new this.app.model.Product(data);
    await result.save();
    return result;
  }

  /**
   *
   * @param models 保存多条记录
   */
  async saveMany(models: any[]) {
    const result = await this.app.model.Product.insertMany(models);
    return result;
  }

  /**
   * 根据id删除单条记录
   * @param id
   */
  async deleteOne(id: string) {
    const result = await this.app.model.Product.findByIdAndDelete(id);
    return result;
  }

  /**
   * 根据ids删除多个数据
   * @param ids 数组形式参数
   */
  async deleteMany(ids: string[]) {
    const result = await this.app.model.Product.remove({
      $in: ids,
    });
    return result;
  }
}
