import IConfig from './config/IConfig';
import express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
class HttpServer {
  constructor(private config: IConfig) {}

  public bootstrap() {
    this.initBodyParser();
    this.initCookieParser();
    this.initCors();
  }

  public run() {
    const { port, env } = this.config;
    app.listen(() => {
      console.info(`Server is running on ${env} environment PORT:${port}`);
      console.info('Press CTRL-C to stop');
    });
  }
  private initBodyParser() {
    app.use(bodyParser.json());
  }
  private initCookieParser() {
    app.use(cookieParser());
  }
  private initCors() {
    app.use(cors());
  }
}
export default HttpServer;
