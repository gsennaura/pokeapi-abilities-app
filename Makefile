SHELL := /bin/sh
BACKEND_SERVICE := backend
FRONTEND_SERVICE := frontend

.PHONY: up dev-shell clean build rebuild compile test test-unit test-integration test-local dev-frontend build-frontend init init-backend init-frontend

up:
	docker-compose up

dev-shell:
	docker-compose run --rm $(BACKEND_SERVICE) sh

clean:
	docker-compose down -v --remove-orphans

build:
	docker-compose build

rebuild: clean
	docker-compose build --no-cache

compile:
	docker-compose run --rm $(BACKEND_SERVICE) npm run build

test:
	docker-compose run --rm $(BACKEND_SERVICE) npm test

test-unit:
	docker-compose run --rm $(BACKEND_SERVICE) npm run test:unit

test-integration:
	docker-compose run --rm $(BACKEND_SERVICE) npm run test:integration

test-local:
	npm test

dev-frontend:
	docker-compose run --rm -p 5173:5173 $(FRONTEND_SERVICE)

build-frontend:
	docker-compose build $(FRONTEND_SERVICE)

init: init-backend init-frontend

init-backend:
	docker-compose run --rm $(BACKEND_SERVICE) npm install

init-frontend:
	docker-compose run --rm $(FRONTEND_SERVICE) npm install
