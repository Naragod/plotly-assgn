# NestJs + SQLite + GraphQL Project

## Context

This is a learning project focused on learning and implementing NestJs, SQLite and GraphQL with an emphasis on readability, design and testability.

## Usage

We have two main entities, the `User` and `Product` enitities, which we can `upsert` and `query` for.
We also have two different ways to query information, a GraphQL API, and a rest API that supports the following endpoints:

- `Get /'users'` # Gets all users
- `Get /'user/:userid'` # Gets a specific user
- `Post /'user'` # Creates/updates a user
- `Post /'product'` # Creates/updates a product
- `Get /'products'` # Gets all products
- `Get /'product/:productid'` # Gets a specific product

To start the server run `npm run start`

### GraphQL Query Usage

For complete graphQL functionality please see the [Product SDL](src/product/product.graphql) and [User SDL](src/user/user.graphql).

Below are useful examples:

```
## To query for a user, the following example query can be used:
{
  getUser(id:"1D"){
    name
    email
  }
}

## If you want to query for order information, the following query can be used as an example
{
  getUser(id:"1D"){
    name,
    email
    orders{
        name
    }
  }
}

```

Expected result:

```

{
    "data": {
        "getUser": {
            "name": "Jameei",
            "email": "someemail@gmail.com",
            "orders": [
                {
                    "name": "toothbrush"
                }
            ]
        }
    }
}
```

Similarly this can be done for products. The difference is that this is a one way relationship, from `User` -> `Product`.
It makes sense to keep this as a one directionaly relationship as `Users` own `Product`s

```
{
  getProduct(id:"ABCD"){
    name
  }
}
```

Expected result:

```
{
    "data": {
        "getProduct": {
            "name": "toothbrush"
        }
    }
}
```

### GraphQL Mutations Usage

Given that the create and update input are the same, we can perform the same operation with the same function.

```
mutation{
  upsertUser(createUserInput: {id:"2E", name:"Uleses", email:"uleses@gmail.com", age: 21, orderIds: ["ABCD"]}){
      name
      email
      age
      orders{
          name
      }
  }
}
```

Expected result

```
{
    "data": {
        "upsertUser": {
            "name": "Uleses",
            "email": "uleses@gmail.com",
            "age": 21,
            "orders": [
                {
                    "name": "toothbrush"
                }
            ]
        }
    }
}
```

We can do similiar things for the products:

```
mutation{
  upsertProduct(createProductInput: {id:"EEEE", name:"keyboard", price: 66.90}){
      id
      name
      price
  }
}
```

Expected result:

```
{
    "data": {
        "upsertProduct": {
            "id": "EEEE",
            "name": "keyboard",
            "price": 66.9
        }
    }
}
```

## Testing

To run tests run the following command: `npm run test`
