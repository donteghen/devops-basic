# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose the app's port
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
