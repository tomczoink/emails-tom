FROM node:10

LABEL com.github.actions.color=purple
LABEL com.github.actions.icon=check

COPY ./ /github/workspace

WORKDIR /github/workspace

RUN npm install

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
