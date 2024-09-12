# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the app with nginx
FROM nginx:alpine

# Copy the build files from the previous stage to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
