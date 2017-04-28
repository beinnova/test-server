FROM node:7.9.0-alpine
MAINTAINER Giorgio Cerruti
RUN mkdir /data
WORKDIR	/data

COPY ./server.js .
COPY ./package.json .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
