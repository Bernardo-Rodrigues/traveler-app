FROM node:15

WORKDIR /usr/src/

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "start"] 