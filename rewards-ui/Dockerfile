FROM node:22

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 4000
# CMD ["pnpm", "start"]
