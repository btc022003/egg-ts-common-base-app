import { Service, Context } from 'egg';

export default class BaseService extends Service {
  private model: string;

  /**
   * 初始化
   * @param model 模型的名字
   * @param app   上下文
   */
  constructor(model: string, app: Context) {
    super(app);
    this.model = model;
  }

  /**
   * 分页方式获取数据
   * @param query   查询条件
   * @param page    当前页码
   * @param per     每页显示的数量
   */
  async list(query = {}, page = 1, per = 10) {
    const data = await this.app.model[this.model]
      .find(query)
      .limit(per)
      .skip((page - 1) * per)
      .sort({
        _id: -1,
      });
    const totalCount = await this.app.model[this.model].count(query);
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
    const data = await this.app.model[this.model].findById(id);
    return data;
  }

  /**
   * 根据id修改单条记录
   * @param id    需要修改的id
   * @param data  数据
   */
  async update(id: string, data: any) {
    const result = await this.app.model[this.model].findByIdAndUpdate(
      id,
      data,
      {
        upsert: true,
      },
    );
    return result;
  }

  /**
   * 保存单条记录
   * @param data
   */
  async save(data: any) {
    const result = new this.app.model[this.model](data);
    await result.save();
    return result;
  }

  /**
   *
   * @param models 保存多条记录
   */
  async saveMany(models: any[]) {
    const result = await this.app.model[this.model].insertMany(models);
    return result;
  }

  /**
   * 根据id删除单条记录
   * @param id
   */
  async deleteOne(id: string) {
    const result = await this.app.model[this.model].findByIdAndDelete(id);
    return result;
  }

  /**
   * 根据ids删除多个数据
   * @param ids 数组形式参数
   */
  async deleteMany(ids: string[]) {
    const result = await this.app.model[this.model].remove({
      $in: ids,
    });
    return result;
  }
}
