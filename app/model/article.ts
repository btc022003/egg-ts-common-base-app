import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const articleSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      descriptions: {
        type: String,
      },
      content: String,
      coverImg: String,
    },
    {
      timestamps: true,
    },
  );
  return mongoose.model('Article', articleSchema);
};
