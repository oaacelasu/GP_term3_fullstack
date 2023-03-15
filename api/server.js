// DOTENV
const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs')

const url = process.env.DB_URL;
const port = process.env.API_SERVER_PORT || 3000;

const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
console.log('CORS setting:', enableCors);


const {ApolloServer, gql} = require('apollo-server-express');
const userModel = require('./models/user');


// GraphQL
let typeDefs = fs.readFileSync(`${__dirname}/schema.graphql`, 'utf8');
typeDefs = gql(typeDefs);

const {GraphQLScalarType} = require('graphql');
const GraphQLDate = new GraphQLScalarType({
    name: 'GraphQLDate',
    description: 'Date custom scalar type',
    parseValue(value) {
        return new Date(value); // value from the client
    },
    serialize(value) {
        return value.getTime(); // value sent to the client
    },
});


// Mongoose
const init = require('./db_manager');

const resolvers = {
    Query: {
        employeeList(parent, args, contextValue, info) {
            console.log(args);

            return employeeList(args);
        },
    },
    Mutation: {
        employeeAdd,
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Express
const express = require('express');
const app = express();

init(url).then(r => {
    server.start().then(() => {
        server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
        app.listen({port: port}, () =>
            console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
    });
    }
).catch(e => {
    console.log(e);
});

async function employeeList(args){
    const {
        firstName,
        lastName,
        age,
        dateOfJoining,
        title,
        department,
        employeeType

    } = args;

    const query = {};
    if (firstName) {
        query.firstName = firstName;
    }

    if (lastName) {
        query.lastName = lastName;
    }

    if (age) {
        query.age = age;
    }

    if (dateOfJoining) {
        query.dateOfJoining = dateOfJoining;
    }

    if (title) {
        query.title = title;
    }

    if (department) {
        query.department = department;
    }

    if (employeeType) {
        query.employeeType = employeeType;
    }

    return await userModel.find(query);
}

async function employeeAdd(_, {employee}) {
    const newEmployee = {...employee};
    await userModel.create(newEmployee, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            console.log("User Created Successfully as:" + user);
        }
    });
    return newEmployee;
}