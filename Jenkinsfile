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
        sh 'npm -v'
        sh 'npm install'
        sh 'npm run build'
      }
    }
  }
}