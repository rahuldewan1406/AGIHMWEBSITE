FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx /var/run /etc/nginx/conf.d && \
    chmod 644 /etc/nginx/conf.d/default.conf

USER nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
