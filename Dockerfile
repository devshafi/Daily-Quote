# Served by nginx
FROM nginx:alpine

# Copy site content to nginx default public dir
COPY . /usr/share/nginx/html
EXPOSE 80
