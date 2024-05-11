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

# Bundle app source
COPY . .

# Build static assets
RUN npm run build

# Use nginx to serve the React application
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
