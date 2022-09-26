FROM nginx:alpine
COPY ucontas-ngnix.conf /etc/nginx/conf.d/default.conf
COPY dist/ucontas-front /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
