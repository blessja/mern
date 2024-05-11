# Specify the desired architecture
ARG ARCH="amd64"

# Use a base image compatible with the desired architecture
FROM ${ARCH}/node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV NODE_ENV production

# Run server.js when the container launches
CMD ["node", "server.js"]
