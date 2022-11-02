FROM node:18-alpine

USER root

WORKDIR /

RUN npm i -g @nestjs/cli

COPY . .

RUN npm install