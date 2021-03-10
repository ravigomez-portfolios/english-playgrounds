FROM node:erbium AS builder
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install --production=true
COPY public ./public
COPY src ./src
RUN yarn build --production=true

FROM nginx:alpine
COPY ./infra/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
