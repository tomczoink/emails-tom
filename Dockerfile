FROM node:8

LABEL com.github.actions.color=purple
LABEL com.github.actions.icon=check

COPY . .
RUN npm install

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
