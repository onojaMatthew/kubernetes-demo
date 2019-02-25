FROM node:8.11.3
WORKDIR /app
ADD . /app
COPY . package*.json
RUN npm install
EXPOSE 4500
CMD ["npm", "start"]
