import config from './config/configuration';
import HttpServer from './sever';

const server = new HttpServer(config);

server.bootstrap();
server.run();
