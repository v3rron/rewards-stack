# Rewards API

This is a **Rails API-only** application used to manage users, products, and redemptions for the Rewards platform.

---

## Requirements

- Ruby 3.4+
- SQLite3 (for local development)
- [Bundler](https://bundler.io)
- Node.js (for some Rails features, optional)

---

## Setup

1. Install dependencies:
```bash
bundle install
```
2. Set environment variables: Copy .env.example to .env:
```bash
cp .env.example .env
```
3. Setup the database
```bash
bin/rails db:create db:migrate db:seed
```
4. Run the API server
```bash
bin/rails server
```
By default, it runs on http://localhost:3000.

---

## Testing
To run unit and controller tests:
```bash
bin/rails test # -v for verbose
```
To run a single test file:
```bash
bin/rails test test/models/redemption_test.rb
```

---

## Code Style
The project is setup with [Rubocop](https://github.com/rubocop/rubocop) for linting.
Run linter:
```bash
bundle exec rubocop
```

Auto-correct style issues:
```bash
bundle exec rubocop -a
```