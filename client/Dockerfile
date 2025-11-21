# Etapa 1: Recursos

FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

# COPY pnpm-lock.yaml ./

# RUN npm install -g pnpm@latest-10

RUN npm install

COPY . .

# Variables de entorno

# ESTOS ARGS VIENEN DEL DOCKER COMPOSE
ARG API_HOST
ARG API_PORT
ARG API_BASE


ENV VITE_API_HOST=$API_HOST
ENV VITE_API_PORT=$API_PORT
ENV VITE_API_BASE=$API_BASE


RUN npm run build

# Etapa 2: Imagen

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html


# Exponer el puerto 80 del contenedor
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

