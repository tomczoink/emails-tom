FROM node:8

WORKDIR /github/workspace

COPY ./package.json /github/workspace/
RUN npm install
ENV PATH /github/workspace/node_modules/.bin:$PATH

COPY . /github/workspace/app/
WORKDIR /github/workspace/app/

ENTRYPOINT ["sh", "/entrypoint.sh"]
