DATASET := md_week
LOCATION := asia-northeast1

.PHONY: load
load: dist/md_week.sql dataset
	cat $< | bq query

dataset:
	bq mk --force --location=$(LOCATION) $(DATASET)

dist/%.sql: sql/%.jinja.sql build
	cp $< $(dir $@)
	jinja2 -D dataset=$(DATASET) $(subst sql/,dist/,$<) > $@
	./replace.py $@

.PHONY: build
build:
	npm run build

.PHONY: test
test:
	npm run test

.PHONY: prepare
prepare:
	npm i

.PHONY: clean
clean:
	rm -rf dist

.PHONY:
query:
	cat test/test.sql | bq query
