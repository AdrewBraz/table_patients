install: install-deps


start:
	npm run start

start-frontend:
	npm run dev-client

install-deps:
	npm install

build:
	npx nodemon build

test:
	npm test

lint:
	npx eslint ./src --ext js,jsx

publish:
	npm publish

.PHONY: test