pipeline {
  agent any
  stages {
    stage('build') {
      agent {
        node {
          label '8.11.2'
        }

      }
      steps {
        sh 'npm -v'
      }
    }
  }
}