# graphql-express-tutorial

Completed code for a GraphQL tutorial (JS) which can be found on the official site [here](https://graphql.org/graphql-js/)

To run the server 
```bash
node server.js
```

The GraphQL server can be tested using the following POST requests

## IP middleware
```json
{
    "query": "query ip { ip }" 
}
```

## rollDice Query
```json
{
    "query": "query RollDice($dice: Int!, $sides: Int) { rollDice(numDice: $dice, numSides: $sides ) }",
    "variables": {
        "dice": 3,
        "sides": 6
    }
}
```
## RandomDie Query
```json
    "query": "query RandomDie($numSides: Int!, $numRolls: Int!) { getDie(numSides: $numSides) { rollOnce roll(numRolls: $numRolls ) } }",
    "variables": {
        "numSides": 6,
        "numRolls": 3,
    }
```


## CreateMessage and GetMessage Queries

### CreateMessage
```json
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

### GetMessage
```json
{
    "query": "query GetMessage($id: ID!) { getMessage(id: $id)} { id author content } }",
    "variables": {
        "id": "<PLACE A VALID ID HERE>"
    }
}
```


