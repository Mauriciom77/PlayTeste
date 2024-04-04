pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        
        stage('Cloning Git') {
            steps {
                git 'https://github.com/Mauriciom77/PlayTeste.git'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run tests') {
            steps {
                script {
                    sh 'npm run testcase'
                }
            }
        }
    }
}