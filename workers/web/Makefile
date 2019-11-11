APP_DIR := $(CURDIR)
YARN_EXEC := `which yarn`
WRANGLER_EXEC := `which wrangler`
PRODUCTION_API_DOMAIN := helloworkers.dolphub.dev/api

all: build

.PHONY: deploy build publish preview deploy-production build-production publish-production

deploy: build publish
deploy-production: build-production publish-production

build:
	$(YARN_EXEC) build
build-production:
	REACT_APP_API_DOMAIN=$(PRODUCTION_API_DOMAIN) $(YARN_EXEC) build

publish:
	$(WRANGLER_EXEC) publish
publish-production:
	$(WRANGLER_EXEC) publish --env production

preview:
	$(WRANGLER_EXEC) preview