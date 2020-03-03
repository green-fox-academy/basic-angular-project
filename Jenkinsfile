pipeline {
  agent {
    docker {
      image 'node:13' // should be latest but jenkins doesn't pull changes
    }
  }
  environment {
    AWS_CREDENTIALS = 'ikarasz-aws'
    S3_BUCKET = 'basic-angular-project'
    S3_REGION = 'eu-central-1'
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
      post {
        always {
          junit 'output/test-results/**/*.xml'
          publishHTML target: [
            allowMissing         : false,
            alwaysLinkToLastBuild: false,
            keepAll              : true,
            reportDir            : 'output/coverage',
            reportFiles          : 'index.html',
            reportName           : 'Coverage report'
          ]
        }
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
    stage ('deploy') {
      when {
        branch 'master'
      }
      steps {
        sh 'yarn build:prod'
        withAWS(region: env.S3_REGION, credentials: env.AWS_CREDENTIALS) {
            s3Upload(
              file: 'dist/',
              bucket: env.S3_BUCKET,
              path: '',
            )
        }
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
