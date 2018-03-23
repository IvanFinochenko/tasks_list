pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd frontend && npm install'
                echo 'Build done'
            }
        }
        stage('Test') {
            steps {
                sh 'cd frontend && npm test'
                echo 'Test done'
            }
        }
    }
}