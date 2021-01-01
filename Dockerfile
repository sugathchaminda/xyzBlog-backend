 FROM node:latest

 RUN mkdir -p /app
 WORKDIR /app
 #/usr/src/app
 cOPY package.json /app
 RUN yarn install

 COPY . /app

 EXPOSE 5000

 ENTRYPOINT ["node"]

 CMD ["server.js"]