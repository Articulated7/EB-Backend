FROM node:20-alpine as base

FROM base as dev
ARG APP
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json yarn.lock ./
COPY ./prisma/schema.prisma ./prisma/schema.prisma
RUN yarn install
COPY . .
RUN yarn build ${APP}
ENV APP_START_CMD="start:dev ${APP}"
CMD yarn ${APP_START_CMD}

FROM base as prod
ARG APP
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json yarn.lock ./
COPY ./prisma/schema.prisma ./prisma/schema.prisma
RUN yarn install --production && npx prisma generate
COPY --from=dev /app/dist ./dist

ENV APP_MAIN_FILE=dist/apps/${APP}/main.js
CMD node ${APP_MAIN_FILE}
