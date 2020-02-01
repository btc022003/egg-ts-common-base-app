import { Context } from 'egg';
import BaseController from './base';

export default class ArticlesController extends BaseController {
  constructor(app: Context) {
    super('articles', app);
  }
}
