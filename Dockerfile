FROM nginx
COPY ucontas-ngnix.conf /etc/nginx/conf.d/default.conf
COPY dist/ucontas-front /usr/share/nginx/html
