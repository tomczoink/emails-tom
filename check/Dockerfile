FROM node:8

# Create app directory
WORKDIR /github/workspace

ADD . /github/workspace

RUN npm install

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["sh", "/entrypoint.sh"]
