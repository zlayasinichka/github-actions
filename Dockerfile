FROM node:16

ENV MONGODB_CONNECTION_PROTOCOL mongodb+srv
ENV MONGODB_DB_NAME gha-demo1
ENV MONGODB_CLUSTER_ADDRESS cluster0.rtnodlg.mongodb.net
ENV MONGODB_USERNAME gh-test 
ENV MONGODB_PASSWORD IwgQxhCzs6CFV8bU

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]