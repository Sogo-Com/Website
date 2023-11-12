FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS deploy-node
WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/gsap-bonus.tgz .
COPY --from=build /app/package.json .
COPY --from=build /app/build-node .
COPY --from=build /app/prisma .
COPY --from=build /app/.env .
RUN npm add prisma --save-dev && npx prisma generate && node ./post-deploy.js
CMD ["node", "index.js"]