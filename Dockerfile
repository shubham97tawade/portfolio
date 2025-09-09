# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and lock file first (better layer caching)
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile || pnpm install --frozen-lockfile

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build || yarn build || pnpm build


# Stage 2: Run the Next.js app
FROM node:18-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
