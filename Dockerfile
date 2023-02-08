FROM node:12.14.0
ENV Home=/home/mcspraint
WORKDIR $Home
COPY package*.json $Home
RUN npm install
COPY . $Home
EXPOSE 3000
CMD ["npm", "run", "testing"]