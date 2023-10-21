FROM node:18

WORKDIR /app

COPY . /app

ENV REACT_APP_PRIMERO_UNO=
ENV REACT_APP_CLAVE_DOS=clave
RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]