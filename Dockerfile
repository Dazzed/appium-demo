FROM node:10.16.0 AS build
ARG APP_FOLDER=/src
WORKDIR $APP_FOLDER
RUN chown -R node:node $APP_FOLDER
USER node

COPY --chown=node:node . $APP_FOLDER
RUN npm install

ENTRYPOINT [ "npm", "run", "web:admin" ]