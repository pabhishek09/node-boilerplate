FROM node:14-alpine

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node ../ . 

RUN npm ci

CMD ["npm", "start"]
