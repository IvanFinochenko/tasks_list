pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd frontend $$ npm install && npm test'
                echo 'Build done'
            }
        }
        stage('Test') {
            steps {
                echo 'Test run'
            }
        }
    }
}