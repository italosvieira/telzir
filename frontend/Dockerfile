FROM node:10.16.1-alpine as buildPhase
RUN mkdir app
WORKDIR app
COPY package.json .
COPY package-lock.json .
COPY /src ./src
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.json .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod

FROM nginx:1.17.3-alpine
COPY /nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=buildPhase /app/dist/frontend /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
