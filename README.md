# PokeAPI Abilities App

This is a fullstack project that consumes the [PokeAPI](https://pokeapi.co) to retrieve Pokémon abilities. It follows **Clean Architecture**, **SOLID**, and **DDD** principles where applicable. The project is built entirely using Docker and is designed for developer productivity and clean code.

---

## Technologies

- Node.js
- TypeScript
- Express
- Docker & Docker Compose
- ts-node-dev

---

## Project Structure

```
pokeapi-abilities-app/
├── backend/
│   ├── src/
│   ├── Dockerfile
│   └── ...
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

You should see output similar to:

```
> app@1.0.0 dev
> ts-node-dev --respawn --transpile-only src/main.ts

[INFO] ts-node-dev ver. X.X.X
Server is running on port 3001
```

---

### Test the API

```bash
curl http://localhost:3001/api/health
```

Expected response:

```json
{ "status": "ok" }
```

---

## Useful Make Commands

| Command         | Description                                     |
|-----------------|-------------------------------------------------|
| `make up`       | Start the development server                    |
| `make build`    | Build container using cache                     |
| `make rebuild`  | Rebuild container from scratch (no cache)       |
| `make clean`    | Stop and remove containers, volumes, networks   |
| `make compile`  | Compile the TypeScript project                  |
| `make dev-shell`| Open an interactive shell in the backend        |

---

## License

MIT