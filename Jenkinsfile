pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        docker {
          image '8.11.2-alpine'
        }

      }
      steps {
        sh 'npm -v'
      }
    }
  }
}