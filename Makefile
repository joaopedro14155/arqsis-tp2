run:
	sh -c "if [ ! -f "./.env" ]; then cp .env.example .env; fi"
	@ docker-compose build
	@ docker-compose up

stop:
	@ docker-compose kill

clean:
	@ rm -rf ./frontend/node_modules
	@ rm -rf ./users/node_modules
	@ rm -rf ./parques/node_modules
	@ rm -rf ./payment/node_modules
	@ rm -rf ./price/node_modules
	@ rm -rf ./route/node_modules