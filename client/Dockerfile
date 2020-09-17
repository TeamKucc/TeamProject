# Build in this container
FROM node:12.18-alpine as builder 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp


# Set production flag so dev dependencies aren't installed
RUN npm install

COPY . /usr/src/app

# Build the production build
RUN npm run build

# Start and nginx container
FROM nginx

# Set our custom nginx.conf in the container
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the react build from the build container
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Set permissions so nginx can serve it
RUN chown nginx.nginx /usr/share/nginx/html/ -R

EXPOSE 80
