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
                sh 'npm test'
                echo 'Test done'
            }
        }
        stage('Docker Build') {
            steps {
                scripts {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        def app = docker.build(ivanfinochenko/tasks_list)
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
    }
}