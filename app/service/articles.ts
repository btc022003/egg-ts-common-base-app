import { Context } from 'egg';
import BaseService from './base';

export default class ArticlesService extends BaseService {
  constructor(app: Context) {
    super('Article', app);
  }
}
