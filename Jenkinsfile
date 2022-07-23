pipeline{
    agent{
        docker{
            image 'cypress/base:16.13.0'
            args '-u root:root'
        }
    }

    stages{
        stage('Download the dependencies'){
            steps{
                sh "npm install"
            }
        }

          stage('Run the test'){
            steps{
                sh "npm run cy:run"
            }
        }
    }
}