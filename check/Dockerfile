FROM node:8

# Create app directory
WORKDIR /github/workspace

COPY . .

RUN npm install

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
