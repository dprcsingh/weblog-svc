import * as dotenv from 'dotenv';
import IConfig from './IConfig';

dotenv.config();

const envs: IConfig = {
  port: Number(process.env.PORT),
  env: String(process.env.NODE_ENV),
};
export default envs;
