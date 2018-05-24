pipeline {
  agent any
  stages {
    stage('Initializing') {
      steps {
        sh '''        echo \'Initializing...\'
        env.PATH = "${node}/bin:${env.PATH}"'''
      }
    }
  }
}