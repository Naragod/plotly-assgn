
# NestJs + SQLite + GraphQL Project
## Context
This is a learning project focused on learning and implementing NestJs, SQLite and GraphQL.

## Usage
We have two main entities which we can `create`, `update` and `query` for, the `User` and `Product` entities.

### Example GraphQL Usage
```
## To query for a user use the following query 
{
  getUser(id:"1D"){
    name
    email
  }
}
```