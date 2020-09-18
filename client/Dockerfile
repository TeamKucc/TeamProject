FROM node:13.12.0-alpine as build


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp


# Set production flag so dev dependencies aren't installed
RUN npm install

COPY . /usr/src/app

RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN chown nginx.nginx /usr/share/nginx/html/ -R
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
