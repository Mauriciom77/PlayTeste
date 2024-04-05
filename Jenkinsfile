pipeline {
    agent any
    
    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    // Executa o pull da imagem Docker
                    sh 'docker pull mcr.microsoft.com/playwright:v1.42.1-jammy'
                }
            }
        }
        
        stage('Setup and Test') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.42.1-jammy'
                }
            }
            steps {
                script {
                    sh '''
                        npm i -D @playwright/test
                        npx playwright install
                    '''
                }
            }
        }
        
        stage('help') {
            steps {
                sh 'npx playwright test --help'
            }
        }
        
        stage('test') {
            steps {
                sh '''
                    npx playwright test --list
                    npx playwright test
                '''
            }
        }
    }
}
