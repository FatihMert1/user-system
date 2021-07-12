FROM node:16-alpine AS base

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 8080


RUN yarn build

RUN yarn test

ENTRYPOINT ["yarn", "start"]