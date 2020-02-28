pipeline {
    agent {
      docker {
          image 'node:alpine'
      }
    }
    environment {
        CHROME_BIN = '/usr/bin/chromium-browser'
    }
    stages {
        stage ('install') {
            steps {
              sh 'apk add chromium'
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
