APP_DIR := $(CURDIR)
YARN_EXEC := `which yarn`
WRANGLER_EXEC := `which wrangler`


all: build

.PHONY: deploy build publish preview

deploy: build publish

build:
	$(YARN_EXEC) build

publish:
	$(WRANGLER_EXEC) publish

preview:
	$(WRANGLER_EXEC) preview