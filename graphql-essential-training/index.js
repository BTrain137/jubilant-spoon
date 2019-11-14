import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolver from './resolver';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolver;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('http://localhost:8080/graphql'));
