FROM node:14.9.0

ADD . /frontend

WORKDIR /frontend
 
COPY package*.json /frontend/
 
COPY . /frontend

RUN npm install

EXPOSE 80
 
CMD [ "npm", "start" ]