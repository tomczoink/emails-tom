FROM node:10

LABEL com.github.actions.color=purple
LABEL com.github.actions.icon=check

RUN npm install

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
