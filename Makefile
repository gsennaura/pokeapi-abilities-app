SHELL := /bin/sh
BACKEND_SERVICE := backend

# Subir containers
up:
	docker-compose up

# Acessar shell do backend
dev-shell:
	docker-compose run $(BACKEND_SERVICE)

# Derrubar containers e volumes
clean:
	docker-compose down -v --remove-orphans

# Build dos containers
build:
	docker-compose build

# Rebuild forçado
rebuild: clean
	docker-compose build --no-cache

# Compilar TypeScript no container
compile:
	docker-compose run $(BACKEND_SERVICE) npm run build

# Rodar todos os testes
test:
	docker-compose run $(BACKEND_SERVICE) npm test

# Rodar apenas testes unitários (caso configure o script)
test-unit:
	docker-compose run $(BACKEND_SERVICE) npm run test:unit

# Rodar apenas testes de integração (caso configure o script)
test-integration:
	docker-compose run $(BACKEND_SERVICE) npm run test:integration

# Rodar testes localmente (fora do Docker)
test-local:
	npm test

FRONTEND_SERVICE := frontend

dev-frontend:
	docker-compose run $(FRONTEND_SERVICE)

build-frontend:
	docker-compose build $(FRONTEND_SERVICE)
