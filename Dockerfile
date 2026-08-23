FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

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
