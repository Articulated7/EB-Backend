FROM node:20-alpine as base

FROM base as dev
ARG APP
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build ${APP}
ENV APP_START_CMD="start:dev ${APP}"
CMD npm run ${APP_START_CMD}

FROM base as prod
ARG APP
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=dev /app/dist ./dist

ENV APP_MAIN_FILE=dist/apps/${APP}/main.js
CMD node ${APP_MAIN_FILE}
