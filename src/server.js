import path from 'path'
import { loadFilesSync, makeExecutableSchema, mergeTypeDefs } from "graphql-tools"
import NodeServer from "./ApolloServer"
import config from "./config/Configuration"
import resolvers from "./resolver"

const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './**/*.graphql')));


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new NodeServer(config)

const initServer = () => {
    server.setupApollo({ schema });
}
initServer();