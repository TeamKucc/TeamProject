FROM node:alpine

RUN npm install -g nodemon

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json /app/server/


#! Install the build requirements for bcrypt
RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp

# Install dependencies
RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]
