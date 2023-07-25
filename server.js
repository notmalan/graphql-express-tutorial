var express = require("express")
var { graphqlHTTP } = require("express-graphql")

const { RandomDie } = require('./classes/RandomDie') 
const { Message } = require('./classes/Message')

var schema = require('./schema')
var fakeDatabase = {}

const loggingMiddleware = (req, res, next) => {
    console.log("ip:", req.ip)
    next()
}

// The root provides a resolver function for each API endpoint
var root = {
    ip: function (args, request){
        return request.ip
    },
    hello: () => {
        return "Hello World!"
    },
    quoteOfTheDay: () => {
        return Math.random() < 0.5 ? "Quote A" : "Quote B"
    },
    random: () => {
        return Math.random()
    },
    rollDice: ({ numDice, numSides }) => {
        var output = []
        for (var i = 0; i < numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (numSides || 6)))
        }
        return output
    },
    getDie: ({ numSides }) => {
        return new RandomDie(numSides || 6)
    },
    setMessage: ({ message }) => {
        fakeDatabase.message = message
        return message
    },
    getMessage: ({ id }) => {
        if(!fakeDatabase[id]) {
            throw new Error("no message exists with id " + id)
        }
        return new Message(id, fakeDatabase[id])
    },
    createMessage: ({ input }) => {
        var id = require("crypto").randomBytes(10).toString("hex")
        fakeDatabase[id] = input
        return new Message(id, input)
    },
    updateMessage: ({ id, input }) => {
        if(!fakeDatabase[id]) {
            throw new Error("no message exists with id " + id)
        }
        fakeDatabase[id] = input
        return new Message(id, input)
    } 
}

var app = express()
app.use(loggingMiddleware)
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: false,
    })
)

app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")