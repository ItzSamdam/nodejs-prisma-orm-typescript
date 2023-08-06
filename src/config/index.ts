import { config } from 'dotenv';
config( { path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';

export const { NDOE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIRECTORY, ORIGIN } = process.env;
