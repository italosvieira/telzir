FROM node:10.16.1-alpine as buildPhase
RUN mkdir app
WORKDIR app
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY /src ./src
RUN npm install
RUN npm run build
RUN npm run install-prod

FROM node:10.16.1-alpine as app
COPY --from=buildPhase /app/node_modules /app/node_modules
COPY --from=buildPhase /app/dist /app/src
CMD ["node", "/app/src/server.js"]