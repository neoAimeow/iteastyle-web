pipeline {
  agent any
  stages {
    stage('error') {
      agent {
        node {
          label 'node'
        }

      }
      steps {
        sh 'npm -v'
      }
    }
  }
}