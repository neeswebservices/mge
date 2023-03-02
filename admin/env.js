import 'dotenv/config.js';
import dotenv from 'dotenv';
dotenv.config({ path: './admin.env' });

export const PORT = process.env.PORT ?? 8000;
export const URI = process.env.URI ?? 'mongodb://127.0.0.1:27017/office';
export const ACCESS_SECRET = process.env.ACCESSSECRET ?? 'secret';
export const MONGOURI = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;
