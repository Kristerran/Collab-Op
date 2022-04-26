const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    email: String
    specialty: [Specialty]
    postings: [Posting]
  }

  type Specialty {
    _id: ID
    name: String
    users: [User]
    postings: [Posting]
  }
  
  type Posting {
    _id: ID
    title: String
    description: String
    user: [User]
    collaborators: [User]
    seeking: [Specialty]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    posting: Posting
    postings: [Posting]
    specialty: Specialty
    specialties: [Specialty]
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;