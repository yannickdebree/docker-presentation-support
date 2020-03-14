install:
	docker-compose build --no-cache
	docker-compose run api yarn install
	docker-compose run pwa yarn install
serve:
	docker-compose up