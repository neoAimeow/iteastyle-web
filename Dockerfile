FROM kkarczmarczyk/node-yarn
MAINTAINER aimeow <a18814888787@gmail.com>

ADD . /app/
WORKDIR /app

RUN yarn install

EXPOSE 15510

CMD ["yarn", "start"]
