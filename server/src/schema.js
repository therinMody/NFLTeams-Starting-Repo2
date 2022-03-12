const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {

    "Query for retrieving all the teams in the NFL"
    getTeams:[Team!]!

}

"A Team"
type Team {
    Key: String!
    City: String!
    Name: String!
    Division: String!
    Conference: String!
    WikipediaLogoUrl: String!
    PrimaryColor: String!
    SecondaryColor: String!
}


`;

module.exports = typeDefs;