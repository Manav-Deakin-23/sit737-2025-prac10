# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose app port (Cloud Run uses 8080)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
