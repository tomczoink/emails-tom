FROM node:8

# Create app directory
WORKDIR /github/workspace

RUN npm install

COPY . .

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
