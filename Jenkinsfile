pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        
        // cambiar el nombre del proyecto aqui 
        stage('Deteniendo los servicios...') {
            steps {
                sh '''
                    docker compose -p sgu-2 down || true
                '''
            }
        }
        
        // Tambien aqui cambiar el nombre del proyecto
        stage('Eliminando imagenes anteriores...') {
            steps {
                sh '''
                    IMAGES=$(docker images --filter "label=com.docker.compose.project=sgu-2" -q)
                    if [ -n "$IMAGES" ]; then
                        docker rmi -f $IMAGES
                    else
                        echo "No hay imagenes por eliminar"
                    fi
                '''
            }
        }

        // Del recurso SCM configurado en el job jala el repo
        stage('Obteniendo actualizacion...') {
            steps {
                checkout scm
            }
        }

        stage('Construyendo y desplegando servicios...') {
            steps {
                sh '''
                    docker compose up --build -d
                '''
            }
        }

    }

    post {
        success {
            echo "Pipeline ejecutado con exito"
        }

        failure {
            echo "Error al ejecutar el Pipeline"
        }

        always {
            echo "Pipeline finalizado"
        }
    }

}