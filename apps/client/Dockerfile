FROM node:16.13.2-alpine3.15 AS BUILD_IMAGE
RUN mkdir /home/app
COPY ./dist /home/app/dist
RUN npm i @shixiyi/static-server -g
ENV PORT=9002
EXPOSE $PORT
CMD sxy-static-server start -p $PORT -d /home/app/dist
