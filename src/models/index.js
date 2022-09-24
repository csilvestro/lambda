// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Post, Images } = initSchema(schema);

export {
  Comment,
  Post,
  Images
};