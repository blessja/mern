# Specify the desired architecture (not necessary for pulling but useful for documentation)
ARG ARCH="amd64"

# Use an official Node runtime as a base image for the build stage
FROM node:14 as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Ensure npm version compatibility
RUN npm install npm@6 -g  

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Build static assets
RUN npm run build

# Use Nginx to serve the React application
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
