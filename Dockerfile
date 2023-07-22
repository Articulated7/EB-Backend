FROM node:20 as base

FROM base as development
ARG APP
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build ${APP}

FROM base as production
ARG APP 
ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV} 
WORKDIR /app
COPY package.json yarn.lock ./
COPY prisma ./prisma
RUN yarn install --production && npx prisma generate
COPY --from=development /app/dist ./dist

ENV APP_MAIN_FILE=dist/apps/${APP}/main.js
CMD node ${APP_MAIN_FILE}
