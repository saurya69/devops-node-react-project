# Build React app
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Only build React, do NOT serve from this container
CMD ["echo", "React build complete"]
