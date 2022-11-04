FROM node:18-alpine

USER root

WORKDIR /

COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]