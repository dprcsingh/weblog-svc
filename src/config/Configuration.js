import { config } from 'dotenv';
config();
const env = process.env;

const configuration = Object.freeze({
    port: env.PORT
})

export default configuration;