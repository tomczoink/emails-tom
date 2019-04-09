FROM node:8

COPY . /github/workspace/
WORKDIR /github/workspace
RUN npm install
ENV PATH /github/workspace/node_modules/.bin:$PATH

COPY . /github/workspace/app/
WORKDIR /github/workspace/app/

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/entrypoint.sh"]
