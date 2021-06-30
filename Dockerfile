# https://www.codementor.io/yomateo/angular-docker-dockerize-your-app-in-5-minutes-video-included-oohw2mzuj
FROM node:lts-alpine3.13 AS builder
WORKDIR /app
COPY . .
RUN ls -alh && \
    npm install && \
    npm install i -D typescript@4.2.4 && \
    npm run build --configuration=production

FROM nginx:alpine
LABEL maintainer="Gary A. Stafford <gary.a.stafford@gmail.com>"
ENV REFRESHED_AT 2021-06-29
COPY --from=builder /app/dist/* /usr/share/nginx/html/
