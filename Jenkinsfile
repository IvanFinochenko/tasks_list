pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd frontend $$ npm install'
                echo 'Build run'
            }
        }
        stage('Test') {
            steps {
                echo 'Test run'
            }
        }
    }
}