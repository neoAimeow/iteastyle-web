pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        docker {
          image 'docker.io/node:8.11.2-alpine'
        }

      }
      steps {
        echo 'Starting build the app.....'
        sh '''npm config set registry https://registry.npm.taobao.org
'''
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('publish') {
      steps {
        echo 'Starting publish the app.......'
      }
    }
  }
}