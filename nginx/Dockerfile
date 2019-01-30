# First build frontend app
FROM node:10.15-alpine

WORKDIR /src

COPY ./src/frontend/package.json  .
COPY ./src/frontend/package-lock.json  .
RUN npm i

COPY ./src/frontend/ .

RUN npm run build

# Then setup nginx to host it
FROM nginx:1.15

COPY ./nginx/default.conf /etc/nginx/conf.d

# Copies from previous stage = 0
COPY --from=0 /src/build /static/build

CMD [ "nginx", "-g", "daemon off;"]