# graphql-express-tutorial

Completed code for the official GraphQL tutorial (JS) which can be found [here](https://graphql.org/graphql-js/)

To run the server 
```bash
node server.js
```
---
The GraphQL server can be tested with the following POST requests:

```json
// Middleware Test
{
    "query": "query ip { ip }" 
}
```
```json
// rollDice Query
{
    "query": "query RollDice($dice: Int!, $sides: Int) { rollDice(numDice: $dice, numSides: $sides ) }",
    "variables": {
        "dice": 3,
        "sides": 6
    }
}
```
```json
// randomDie Query
{
    "query": "query RandomDie($numSides: Int!, $numRolls: Int!) { getDie(numSides: $numSides) { rollOnce roll(numRolls: $numRolls ) } }",
    "variables": {
        "numSides": 6,
        "numRolls": 3,
    }
}
```
```json
// createMessage Mutation
{
    "query": "mutation CreateMessage($input: MessageInput) { createMessage(input: $input) { id } }",
    "variables": {
        "input" {
            "author": "Author",
            "content": "Content Body"
        }
    }
}
```
```json
// getMessage Query
{
    "query": "query GetMessage($id: ID!) { getMessage(id: $id)} { id author content } }",
    "variables": {
        "id": "<PLACE A VALID ID HERE>"
    }
}
```