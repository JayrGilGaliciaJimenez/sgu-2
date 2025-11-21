FROM maven:3.9.9-eclipse-temurin-21

WORKDIR /app

# Copiar toda la estructura del proyecto al directorio de trabajo
COPY . .

# Esto generara el jar y cambia el nombre del jar a app.jar 
RUN mvn clean package -DskipTests && cp target/*.jar app.jar

# Exponer el en puerto 8080 del contenedor
EXPOSE 8080

# java -jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar" ] 