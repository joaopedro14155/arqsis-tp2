FROM node:14.9.0

ADD . /parques

WORKDIR /parques
 
COPY package*.json /parques/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /parques
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}
 
CMD [ "npm", "start" ]