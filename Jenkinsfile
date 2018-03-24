pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'Build done'
            }
        }
        stage('Test') {
            steps {
                sh 'cd frontend && npm test'
                echo 'Test done'
            }
        }
        stage('Docker Build') {
            steps {
                docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                    def app = docker.build(ivanfinochenko/tasks_list)
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
    }
}