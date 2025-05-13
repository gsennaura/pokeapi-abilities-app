SHELL := /bin/sh
BACKEND_SERVICE := backend

up:
	docker-compose up

dev-shell:
	docker-compose run $(BACKEND_SERVICE)

clean:
	docker-compose down -v --remove-orphans

build:
	docker-compose build

rebuild: clean
	docker-compose build --no-cache

compile:
	docker-compose run $(BACKEND_SERVICE) npm run build

test:
	docker-compose run $(BACKEND_SERVICE) npm test
