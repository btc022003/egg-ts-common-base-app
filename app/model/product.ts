import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      descriptions: {
        type: String,
      },
      onSale: {
        type: Boolean,
        default: false,
      },
      content: {
        type: String,
        default: '',
      },
      quantity: {
        type: Number,
        default: 10,
      },
      price: {
        type: Number,
        default: 0.0,
      },
      coverImg: {
        type: String,
      },
    },
    {
      timestamps: true,
    },
  );
  return mongoose.model('Product', productSchema);
};
