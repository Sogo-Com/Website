FROM node:18-alpine AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm add prisma --save-dev && npx prisma generate && npx prisma migrate deploy &&  && node ./prisma/post-deploy.js
RUN npm run build

FROM node:18-alpine AS deploy-node
WORKDIR /app
RUN rm -rf ./*

COPY --from=build /app/gsap-bonus.tgz .
COPY --from=build /app/package.json .
COPY --from=build /app/build-node ./build-node
COPY --from=build /app/uploads ./uploads
COPY --from=build /app/prisma .
COPY --from=build /app/.env .
COPY --from=build /app/server.js .
RUN apk update && apk add bash
CMD ["node", "server.js"]
#ENTRYPOINT tail -f /dev/null #If debug
#docker exec -it website-sogocom-1 bash #If debug
