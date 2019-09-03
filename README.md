## Description

A sample repository of [Nest](https://github.com/nestjs/nest) + [TypeORM](https://github.com/typeorm/typeorm) on Docker.

## Prerequirements

- [Docker](https://www.docker.com/)

## Installation

```bash
# install dependencies
$ docker-compose run app npm ci
```

## Running the app

```bash
# development
$ docker-compose up

# shutting down containers
$ docker-compose down
```

## Sample requests

```bash
$ curl -X POST http://localhost:3000/api/v1/todos \
  -H "Content-Type: application/json" \
  -d '{"text":"todo"}'
$ curl -X GET http://localhost:3000/api/v1/todos
$ curl -X GET http://localhost:3000/api/v1/todos/1
$ curl -X PUT http://localhost:3000/api/v1/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"text":"done", "checked":true}'
$ curl -X DELETE http://localhost:3000/api/v1/todos/1
```

```
query {
  todo(id: 1) {
    id
    text
    checked
    createdAt
    updatedAt
  }
}

query {
  todos {
    id
    text
    checked
    createdAt
    updatedAt
  }
}

mutation {
  createTodo(text: "todo") {
    id
    text
    checked
    createdAt
    updatedAt
  }
}

mutation {
  updateTodo(id: 1, text: "done", checked: false) {
    id
    text
    checked
    createdAt
    updatedAt
  }
}

mutation {
  removeTodo(id: 1)
}
```

## Test

```bash
# unit tests
$ docker-compose run app npm test
```

## Build

```bash
# unit tests
$ docker-compose run app npm run build
```

## License

This sample is [MIT licensed](LICENSE).
