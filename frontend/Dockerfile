FROM node:22.17-slim

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all frontend files
COPY . .

# Build for production OR serve development version
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]