# https://www.codementor.io/yomateo/angular-docker-dockerize-your-app-in-5-minutes-video-included-oohw2mzuj
FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install yarn && \
    yarn install && \
    yarn add typescript@">=3.1.1 <3.3" --dev && \
    yarn run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
