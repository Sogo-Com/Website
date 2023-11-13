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
#RUN apk update && apk add bash #If debug
RUN npm add prisma --save-dev && npx prisma db push && npx prisma generate && node ./post-deploy.js
CMD ["node", "index.js"]
#ENTRYPOINT tail -f /dev/null #If debug
#docker exec -it website-sogocom-1 bash #If debug
