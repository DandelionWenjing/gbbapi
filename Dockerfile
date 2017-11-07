FROM node:6-onbuild
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 8000
CMD node server.js