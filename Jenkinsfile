pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
            args '-u root' // Executar o contêiner como root
        }
    }
    stages {
        stage('install playwright') {
            steps {
                sh '''
                    npm i -D @playwright/test
                    npx playwright install
                '''
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
