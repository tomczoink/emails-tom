FROM node:8

LABEL com.github.actions.color=purple
LABEL com.github.actions.icon=check

RUN npm install

COPY . .

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
