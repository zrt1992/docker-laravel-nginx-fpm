#!/bin/bash

docker-compose down -v
docker-compose up -d
docker exec -w /var/www php php artisan key:generate
docker exec -w /var/www php  composer install
docker exec -w /var/www php composer require vladimir-yuldashev/laravel-queue-rabbitmq
