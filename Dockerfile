FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG BUILD_ENV=production

RUN npx ng build --configuration $BUILD_ENV

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/dist/wedding-app ./dist/wedding-app

COPY start.sh ./start.sh

RUN chmod +x ./start.sh

ENV NODE_ENV=production

EXPOSE 3000

CMD ["./start.sh"]
