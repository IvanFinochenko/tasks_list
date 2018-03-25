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
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        def app = docker.build('ivanfinochenko/tasks_list')
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
    }

    post {
        always {
            jiraAddComment site: 'Jira', idOrKey: 'TL-8', comment: 'test comment'
            echo 'post always'
        }
    }
}