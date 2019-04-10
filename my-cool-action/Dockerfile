FROM node:slim

LABEL "com.github.actions.name"="check-files"
LABEL "com.github.actions.description"="Checks files to see which are changed with PR"
LABEL "com.github.actions.icon"="alert-octagon"
LABEL "com.github.actions.color"="purple"

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your action's code
COPY . .

ENTRYPOINT ["node", "/index.js"]
