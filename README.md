# Rewards Stack

This repository orchestrates the **Rewards API (Rails)** and **Rewards UI (Next.js)** for production using Docker Compose. It’s designed to provide an immutable, portable build that runs reliably across environments.

---

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Basic understanding of Docker networking and volumes

---

## Usage
Build and start the full stack
```bash
docker-compose up -d --build
```
Check container status
```bash
docker-compose ps
```
SSH into a container
```bash
docker-compose exec api|ui bash
```
Stop and remove containers
```bash
docker-compose down -v
```
Tail the logs
```bash
docker-compose logs -f api|ui
```
The database is being reset on every container start, so if you'd like to refresh the data:
```bash
docker-compose restart api
```

---

## Production Considerations
- Add JWT authentication with [devise-jwt](https://rubygems.org/gems/devise-jwt)
- And authorization with [pundit](https://rubygems.org/gems/pundit)
- Add [jbuilder](https://rubygems.org/gems/jbuilder) support for structured API responses
- Add [will_paginate](https://rubygems.org/gems/will_paginate) for result pagination
-	Replace SQLite with Postgres or Aurora for scale.
-	Use nginx or traefik as a reverse proxy with HTTPS.
-	Consider deploying with a CI/CD tool and external secrets management.