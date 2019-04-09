FROM node:10

LABEL com.github.actions.color=purple
LABEL com.github.actions.icon=check

WORKDIR /github/workspace

COPY . .

RUN npm install

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
