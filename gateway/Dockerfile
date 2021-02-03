FROM nginx:stable-alpine-perl

ARG SERVICE_PORT

#internal services
ARG SERVICE_PORT_USERS
ARG SERVICE_PORT_PARQUES
ARG SERVICE_PORT_IOT
ARG SERVICE_PORT_PAYMENT
ARG SERVICE_PORT_PRICE
ARG SERVICE_PORT_ROUTE

ARG SERVICE_PORT_DOC

EXPOSE ${SERVICE_PORT}

RUN apk update && apk add bash

COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]