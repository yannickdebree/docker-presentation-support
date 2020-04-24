# Docker presentation

This repository is the support of my [talk about Docker](https://talks.yannickdebree.com/en/docker-presentation).

## Installations

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Basic commands

Visualize all images

```
docker images
```

Visualize running containers

```
docker ps
```

Visualize all containers

```
docker ps -a
```

Run demo container

```
docker run hello-world
```

Pull image from Docker Hub

```
docker pull node:10
```

Run container from image in CLI

```
docker run -it --name first-node-container node:10 bash
```

Remove container

```
docker rm first-node-container
```

## Dockerfile

Build image from Dockerfile

```
cd dockerfile
docker image build -t my-first-dockerfile-image .
```

Run the built image

```
docker run my-first-dockerfile-image
```

## Docker Compose

Build images of defined services

```
cd ../docker-compose
docker-compose build
```

Run commands against some services

```
docker-compose run api yarn install
docker-compose run pwa yarn install
```

Start and attach containers to services

```
docker-compose up
```

Stop services and remove containers

```
docker-compose stop
docker-compose rm
```
