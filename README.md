# Rewards Stack

This repository orchestrates the **Rewards API (Rails)** and **Rewards UI (Next.js)** for production using Docker Compose. It’s designed to provide an immutable, portable build that runs reliably across environments.

---

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Basic understanding of Docker networking and volumes

---

## Usage
Build and Start the Full Stack
```bash
docker-compose up -d --build
```
Stop and Remove Containers
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
-	Replace SQLite with Postgres or Aurora for scale.
-	Use nginx or traefik as a reverse proxy with HTTPS.
-	Consider deploying with a CI/CD tool and external secrets management.