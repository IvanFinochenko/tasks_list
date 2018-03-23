pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                cd frontend
                npm install
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