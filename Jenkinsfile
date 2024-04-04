/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    stages {
        stage('Instalar dependências') {
            steps {
                // Etapa para instalar dependências usando npm
                bat 'npm install -g npm@latest'
            }
        }
        stage('Instalar Playwright') {
            steps {
                bat 'npm install -g playwright'
                  }
        }
        stage('Executar testes') {
            steps {
                // Etapa para executar testes usando Playwright
                bat 'npm run testCase'
            }
        }
    }
}
