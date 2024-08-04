.DEFAULT_GOAL := help

# << main commands >>

dev: node_modules ## run remix server
	pnpm run dev

lint: node_modules ## lint & format
	pnpm run lint
	pnpm run format

test: node_modules ## run vitest
	pnpm run test

build: node_modules ## run build
	pnpm run build

preview: node_modules ## preview builded files
	pnpm run preview

check: lint ci/test build ## run all checks

# preview: node_modules ## preview builded files
# 	pnpm run test:unit
# 	pnpm run test:integration

# << ci commands >>

ci/test: node_modules ## run vitest once
	pnpm run test:ci

# << utility commands >>

help: ## print this message
	@printf "\033[36m%-25s\033[0m %-50s %s\n" "[command]" "[Description]" 
	@grep -E '^[/a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}'

# << internal commands >>

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile
