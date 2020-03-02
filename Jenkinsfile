pipeline {
  agent {
    docker {
      image 'node:13' // should be latest but jenkins doesn't pull changes
    }
  }
  stages {
    stage ('setup build environment') {
      steps {
        sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -q'
        sh 'apt update'
        sh 'apt install -qq ./google-chrome-stable_current_amd64.deb -y'
      }
    }
    stage ('install dependencies') {
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
        sh 'yarn test:ci'
      }
    }
    stage ('e2e testing') {
      when { // time consuming, run only on pull requests
        allOf {
          environment name: 'CHANGE_ID', value: ''
          branch 'master'
        }
      }
      steps {
        sh 'yarn e2e:ci'
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
