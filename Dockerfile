# https://www.codementor.io/yomateo/angular-docker-dockerize-your-app-in-5-minutes-video-included-oohw2mzuj
FROM node:lts-alpine3.13 AS builder
WORKDIR /app
COPY . .
RUN ls -alh && \
    npm install && \
    npm install i -D typescript@4.2.4 && \
    npm run build --configuration=docker

FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/
