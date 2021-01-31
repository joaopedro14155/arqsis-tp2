FROM node:14.9.0

ADD . /price

WORKDIR /price
 
COPY package*.json /price/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /price
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}
 
CMD [ "npm", "start" ]