.DUMMY: run
.DUMMY: run-production
.DUMMY: install

run:
	op run --env-file=.env.local.env -- node index.js

run-production:
	op run --env-file=.env-production.env -- node index.js

install:
	npm install

lint:
	npx @biomejs/biome format --write .
