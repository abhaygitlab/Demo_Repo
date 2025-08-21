FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
# configure nginx to proxy /api to backend (if using same domain + k8s ingress), otherwise use CORS
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
