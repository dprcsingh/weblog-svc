import { ApolloServer } from 'apollo-server-express';
import Express from 'express';

const app = new Express();

class NodeServer {
    constructor(config) {
        this.config = config;
    }
    bootstrap() {

    }
    run() {
        const { port } = this.config;
        app.listen(port, () => {
            console.log(`🚀  Server ready at ${port}`);
        });
    }

    setupApollo(data) {
        this.server = new ApolloServer({...data })
        this.server.applyMiddleware({ app })
        this.run()
    }

}

export default NodeServer;