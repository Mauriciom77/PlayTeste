pipeline{
    agent{
        docker{
            image 'mcr.microsoft.com/playwright:v1.43.0-jammy'
        }
    }
    stages{
        stage('Install playwright'){
            steps{
                sh '''
                    npx playwright install
                '''
            }
        }
        stage('help'){
            steps{
                sh '''
                    npx playwright  test --help
                '''
            }
        }
        stage('Install node modules'){
            steps{
                sh '''
                    npm install --cache $PWD/npm-cache
                '''
            }
        }
        stage('End to end test'){
            steps{
                sh '''
                    npm run test
                '''
            }
        }
    }
}
