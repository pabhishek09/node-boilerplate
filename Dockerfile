FROM node:14-alpine

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node . . 

RUN npm i

CMD ["npm", "run", "dev"]
