APP_DIR := $(CURDIR)
YARN_EXEC := `which yarn`
WRANGLER_EXEC := `which wrangler`
CLOUDWORKER_EXEC := `which cloudworker`
WORKER_TEST_DATA := ./test-data.json

all: build

.PHONY: deploy build publish preview deploy-production build-production publish-production

dev: build
	$(CLOUDWORKER_EXEC) -p 3001 -d --kv-file ns=./ns.json worker/script.js

deploy: publish
deploy-production: build-production publish-production

build:
	$(YARN_EXEC) build
build-production:
	$(YARN_EXEC) build

publish:
	$(WRANGLER_EXEC) publish
publish-production:
	$(WRANGLER_EXEC) publish --env production

preview:
	$(WRANGLER_EXEC) preview