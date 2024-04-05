pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Check Node.js version') {
            steps {
                script {
                    sh 'node --version'
                }
            }
        }
        stage('Exibir informações do Git') {
            steps {
                echo "Commit: ${env.GIT_COMMIT}"
                echo "Branch: ${env.GIT_BRANCH}"
                echo "URL do Repositório: ${env.GIT_URL}"
            }
        }
        stage('Cloning Git') {
            steps {
                git 'https://github.com/Mauriciom77/PlayTeste.git'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install @playwright/test@1.42.1'
                sh 'npm install -g mocha'
            }
        }
        
        stage('Run tests') {
            steps {
                
                script {
                    def testResult = sh(returnStatus: true, script: 'npx playwright test google')
                    if (testResult == 0) {
                        currentBuild.description = 'Testes concluídos com sucesso!'
                    } else {
                        currentBuild.description = 'Testes falharam!'
                    }
                }
            }
        }
        /*stage('Send email') {
            steps {
                // Enviar e-mail
                emailext (
                    subject: "Teste envio ",
                    body: "${currentBuild.description}",
                    to: "mauricio@unicorp.com.br"
                )
            }
        }*/
        
    }
}
