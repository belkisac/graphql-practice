const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
    type Query {
        info: String!,
        feed: [Link!]!,
    }
    type Link {
        id: ID!,
        description: String!,
        url: String!,
    }
`

let links = [{
    id: 'link-0',
    url: 'www.httpstatusdogs.com',
    description: 'learn http status codes through dog pics'
}]

const resolvers = {
    Query: {
        info: () => 'This is the API of my hackernews clone!',
        feed: () => links,
    },
    Link: {
        id: (root) => root.id,
        description: (root) => root.description,
        url: (root) => root.url,
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(()=> console.log(`Server is running on http://localhost:4000`))
