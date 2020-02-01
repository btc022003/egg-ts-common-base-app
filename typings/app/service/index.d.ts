// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportProducts from '../../../app/service/products';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    products: ExportProducts;
  }
}
