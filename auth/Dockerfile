FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install nodemon -g
RUN npm install
COPY . .
EXPOSE 8002
CMD ["npm", "run", "dev"]