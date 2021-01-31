FROM node:14.9.0

ADD . /user

WORKDIR /user
 
COPY package*.json /user/
 
RUN npm install
RUN npm install -g nodemon 

COPY . /user
ARG SERVICE_PORT
EXPOSE ${SERVICE_PORT}

#RUN . /user/.env
 
CMD [ "npm", "start" ]