# PokeAPI Abilities App

This is a fullstack project that consumes the [PokeAPI](https://pokeapi.co) to retrieve Pokémon data such as abilities and listing. It follows **Clean Architecture**, **SOLID**, and **DDD** principles where applicable. The project is fully containerized with Docker and designed with testability, separation of concerns, and developer experience in mind.

---

## Technologies

- Node.js
- TypeScript
- Express
- Docker & Docker Compose
- ts-node-dev
- Jest (unit and integration testing)
- Supertest (for HTTP tests)
- Swagger (OpenAPI documentation)

---

## Project Structure

```
pokeapi-abilities-app/
├── backend/
│   ├── src/
│   ├── tests/
│   ├── Dockerfile
│   ├── jest.config.ts
│   ├── tsconfig.json
│   └── ...
├── .github/
│   └── workflows/
│       └── ci.yml
├── docker-compose.yml
├── Makefile
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/gsennaura/pokeapi-abilities-app.git
cd pokeapi-abilities-app
make rebuild
make up
```

Expected output:

```
> app@1.0.0 dev
> ts-node-dev --respawn --transpile-only src/main.ts

Server is running on port 3001
```

---

## Testing the API

### Health Check

```bash
curl http://localhost:3001/api/health
```

Response:

```json
{ "status": "ok" }
```

### Pokémon Abilities

```bash
curl http://localhost:3001/api/pokemons/pikachu/abilities
```

Response:

```json
{
  "pokemon": "pikachu",
  "abilities": ["lightning-rod", "static"]
}
```

### List Pokémons

```bash
curl http://localhost:3001/api/pokemons
```

Response:

```json
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    ...
  ]
}
```

---

### Running Locally Without Docker

```bash
cd backend
npm install
npm run dev
```

---

## Running Tests

### Unit Tests

```bash
npm run test:unit
```

### Integration Tests

```bash
npm run test:integration
```

---

## Continuous Integration

This project uses GitHub Actions for CI/CD. The workflow is triggered on pushes and pull requests to the `main` and `develop` branches. It runs both unit and integration tests automatically.

Workflow location:
```
.github/workflows/ci.yml
```

---

## Useful Make Commands

| Command          | Description                                     |
|------------------|-------------------------------------------------|
| `make up`        | Start the development server                    |
| `make build`     | Build container using cache                     |
| `make rebuild`   | Rebuild container from scratch (no cache)       |
| `make clean`     | Stop and remove containers, volumes, networks   |
| `make compile`   | Compile the TypeScript project                  |
| `make dev-shell` | Open an interactive shell in the backend        |
| `make test`      | Run all tests inside the container              |

---

## Architecture Overview

This project follows Clean Architecture principles, along with SOLID and DDD where applicable. Below is a high-level summary of key layers:

### 1. Route
- Maps HTTP endpoints to controller methods

### 2. Controller
- Handles incoming HTTP requests and produces responses
- Validates inputs and delegates logic to use cases

### 3. Use Case
- Orchestrates application logic
- Contains business rules and coordinates services

### 4. Service
- Communicates with external systems (e.g. PokéAPI)
- Does not contain business logic

---

## License

MIT