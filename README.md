# Docker presentation support

This repository is the support of my [talk about Docker](https://yannickdebree.com/talks/docker.html).

## Installations

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Basic commands

Visualize all images

```bash
docker images
```

Visualize running containers

```bash
docker ps
```

Visualize all containers

```bash
docker ps -a
```

Run demo container

```bash
docker run hello-world
```

Pull image from Docker Hub

```bash
docker pull node:16
```

Run container from image in CLI

```bash
docker run -it --name first-node-container node:16 bash
```

Remove container

```bash
docker rm first-node-container
```

## Dockerfile

Build image from Dockerfile

```bash
cd dockerfile
docker image build -t my-first-dockerfile-image .
```

Run the built image

```bash
docker run my-first-dockerfile-image
```

## Docker Compose

Build images of defined services

```bash
cd ../docker-compose
docker-compose build --no-cache
```

Run command inside a container to install dependencies

```bash
docker-compose run api yarn install
```

Start and attach containers to services

```bash
docker-compose up
```

Stop services and remove containers

```bash
docker-compose stop
docker-compose rm
```
