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
        stage('Docker build') {
            steps {
                app = docker.build(ivanfinochenko/tasks_list);
                docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
    }
}