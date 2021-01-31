FROM node:14.9.0

ADD . /iot

WORKDIR /iot
 
COPY package*.json /iot/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /iot
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}
 
CMD [ "npm", "start" ]