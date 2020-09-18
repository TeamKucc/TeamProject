FROM node:alpine

RUN npm install -g nodemon

WORKDIR /app

COPY ./package.json ./


#! Install the build requirements for bcrypt
RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp

# Install dependencies
RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "index.js"]
