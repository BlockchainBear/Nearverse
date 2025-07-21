FROM node:16

RUN apt-get update && apt-get install -y clang cmake

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
