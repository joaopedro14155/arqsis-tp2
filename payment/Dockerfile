FROM node:14.9.0

ADD . /payment

WORKDIR /payment
 
COPY package*.json /payment/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /payment
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}
 
CMD [ "npm", "start" ]