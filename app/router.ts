import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/h', controller.home.demo);

  router.resources(
    'admin_products',
    '/api/v1/admin/products',
    controller.api.v1.admin.products,
  );
};
