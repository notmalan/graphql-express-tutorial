var { buildSchema } = require("graphql")

var schema = buildSchema(`
    input MessageInput {
        content: String
        author: String
    }
    type Message {
        id: ID!
        content: String
        author: String
    }
    type Query {
        ip: String
        hello: String
        quoteOfTheDay: String
        random: Float!
        rollDice(numDice: Int!, numSides: Int): [Int]
        getDie(numSides: Int): RandomDie
        getMessage(id: ID!): Message
    }
    type RandomDie {
        numSides: Int!
        rollOnce: Int!
        roll(numRolls: Int!): [Int]
    }
    type Mutation {
        createMessage(input: MessageInput): Message
        updateMessage(id: ID!, input: MessageInput): Message
    }
`) 

module.exports = schema 