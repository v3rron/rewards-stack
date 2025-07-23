FROM node:22

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 4000
# CMD ["pnpm", "start"]
