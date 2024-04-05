pipeline {
    agent any
    
    stages {
        stage('Change Docker permissions') {
            steps {
                script {
                    // Adiciona o usuário do Jenkins ao grupo Docker
                    sh 'sudo usermod -aG docker jenkins'
                    
                    // Altera as permissões do soquete do Docker
                    sh 'sudo chmod 666 /var/run/docker.sock'
                }
            }
        }
        
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
