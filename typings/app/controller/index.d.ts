// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiV1AdminArticles from '../../../app/controller/api/v1/admin/articles';
import ExportApiV1AdminBase from '../../../app/controller/api/v1/admin/base';
import ExportApiV1AdminProducts from '../../../app/controller/api/v1/admin/products';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      v1: {
        admin: {
          articles: ExportApiV1AdminArticles;
          base: ExportApiV1AdminBase;
          products: ExportApiV1AdminProducts;
        }
      }
    }
  }
}
