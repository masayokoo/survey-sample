.PHONY: all setup build dbcreate migrate bundle up down open bash console db logs rspec rubocop help
.DEFAULT_GOAL := help

setup: ## copy_dot_env_if_not_exists & build & bundle & yarn & dbcreate & dbmigrate
	make copy_dot_env_if_not_exists
	make build
	make bundle
	make dbcreate
	make dbmigrate
	make

build: ## docker-compose build
	docker-compose build

dbcreate: ## docker-compose run --rm app bundle exec jets db:create
	docker-compose run --rm app bundle exec jets db:create

dbmigrate: ## docker-compose run --rm app bundle exec jets db:migrate
	docker-compose run --rm app bundle exec jets db:migrate

bundle: ## docker-compose run --rm app bundle install
	docker-compose run --rm app bundle install

yarn: ## docker-compose run --rm app yarn install
	docker-compose run --rm app yarn install

up: ## docker-compose up
	docker-compose up

up-d: ## docker-compose up -d
	docker-compose up -d

down: ## docker-compose down
	docker-compose down

restart: ## docker-compose restart
	docker-compose restart

open: ## http://localhost:9080
	open http://localhost:9080

bash: ## docker-compose exec app bash
	docker-compose exec app bash

console:
	docker-compose run --rm app bundle exec jets console

db: ## docker-compose run --rm app bundle exec jets db -p
	docker-compose run --rm app bundle exec jets db -p

logs: ## docker-compose logs
	docker-compose logs

rubocop: ## docker-compose run --rm app bundle exec rubocop
	docker-compose run --rm app bundle exec rubocop

rubocop-a: ## docker-compose run --rm app bundle exec rubocop -a
	docker-compose run --rm app bundle exec rubocop -a

rspec: ## docker-compose run --rm app bundle exec rspec
	docker-compose run --rm app bundle exec rspec

brakeman: ## docker-compose run --rm app bundle exec brakeman
	docker-compose run --rm app bundle exec brakeman

copy_dot_env_if_not_exists: ## copy .env.dev if not exists
	@if [ -e .env.development ];then echo ".env.development is exists"; else cp .env.sample .env.development; echo "write correct settings to .env.development"; fi

help: ## puts only "make"!
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
