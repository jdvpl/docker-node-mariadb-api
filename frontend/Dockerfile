FROM node:16

WORKDIR /app

COPY . /app

ENV REACT_APP_REST=/api

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve","-s","build"]