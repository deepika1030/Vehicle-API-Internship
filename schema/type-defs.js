const {gql}= require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
    }
    type vehicle{
        Name:String!
        value:Float!
        Category:String!
        number:Int!
    }

    type Query{
        users: [User!]!
        getData:[vehicle!]!
    }
`;

module.exports = {typeDefs};