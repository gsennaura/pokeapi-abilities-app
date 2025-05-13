FROM node:18-alpine

WORKDIR /app

# Copy only package.json and lockfile first
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the code
COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]
