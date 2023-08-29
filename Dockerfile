FROM node:18-alpine AS build


WORKDIR /app 
COPY . .
RUN yarn
RUN yarn build

FROM node:18-alpine AS deploy-node
WORKDIR /app 
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
COPY --from=build /app/prisma .
COPY --from=build /.env .
RUN yarn add prisma --save-dev && yarn prisma generate && node ./post-deploy.js
CMD ["node", "index.js"]