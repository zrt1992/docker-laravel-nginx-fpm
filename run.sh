#!/bin/bash

docker-compose down -v
docker-compose up -d
docker exec -w /var/www php php artisan key:generate
