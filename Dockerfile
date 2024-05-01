FROM node:14

WORKDIR /app

# First, copy only the package.json and package-lock.json files
COPY package*.json /app/

# Install production dependencies
RUN npm install --only=production

# Now, copy the rest of the application files
COPY . .

# Expose port 3000 (assuming your application listens on this port)
EXPOSE 3000

# Command to start your application
CMD ["npm", "start"]
