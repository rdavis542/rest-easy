FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . ./
USER root
RUN npm install
COPY --chown=node:node . .
USER node
EXPOSE 8080

CMD [ "node", "index.js" ]
