import { cleanEnv, port, str } from 'envalid';

export const ValidateVar = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port(),
    });
};
