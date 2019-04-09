FROM node:8

# Create app directory
WORKDIR /github/workspace

ls

COPY package.json ./

RUN npm install

COPY . ./

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["sh", "/entrypoint.sh"]
