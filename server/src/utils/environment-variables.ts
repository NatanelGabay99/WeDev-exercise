import { expand } from 'dotenv-expand';
import { config } from 'dotenv';
import { resolve } from 'path';


const path = resolve(__dirname, '../../', `.env.${process.env.NODE_ENV ?? 'local'}`);
expand(config({ path }));

export const NODE_ENV: string = process.env.NODE_ENV ?? 'local';
export const PORT: number = +(process.env.PORT ?? 3005);
export const CORS_ORIGIN_URL: string = process.env.CORS_ORIGIN_URL ?? '';
export const ACCESS_KEY_SHOPIFY: string = process.env.ACCESS_KEY_SHOPIFY ?? ''
export const SHOPIFY_STORE: string = process.env.SHOPIFY_STORE ?? ''