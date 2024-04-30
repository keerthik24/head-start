# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Clear npm cache
RUN npm cache clean --force

# Install necessary build dependencies
RUN apt-get update && apt-get install -y build-essential python

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using node
CMD ["node", "app.js"]
