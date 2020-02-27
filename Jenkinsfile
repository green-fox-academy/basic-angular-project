pipeline {
    agent {
      docker {
          image 'node:alpine'
      }
    }
    stages {
        stage ('install') {
            steps {
              sh 'yarn install'
            }
        }
        stage ('lint') {
            steps {
              sh 'yarn lint'
            }
        }
        stage ('unit testing') {
            steps {
              sh 'yarn test --no-watch --no-progress --browsers=ChromeHeadlessCI'
            }
        }
        stage ('e2e testing') {
            steps {
              sh 'yarn e2e'
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
