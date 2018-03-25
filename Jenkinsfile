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
        success {
            jiraAddComment site: 'Jira', idOrKey: 'TL-7', comment: 'Build successed'
        }
        failure {
            script {
                def errorIssue = [fields: [
                                   project: [id: '10200'],
                                   summary: BUILD_ID + 'Build failed',
                                   issuetype: [id: '10101']]]
                jiraAddComment site: 'Jira', idOrKey: 'TL-7', comment: 'Build failed'
                jiraNewIssue site: 'Jira', issue: errorIssue
            }
        }
    }
}