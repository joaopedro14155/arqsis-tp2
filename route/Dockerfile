FROM node:14.9.0

ADD . /route

WORKDIR /route
 
COPY package*.json /route/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /route
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}
 
CMD [ "npm", "start" ]