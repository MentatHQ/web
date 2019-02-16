#Build phase
FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#Run phase
FROM nginx

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx","-g","daemon off;"]