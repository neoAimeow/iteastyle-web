pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('Initializing') {
      agent {
        node {
          label 'node'
        }

      }
      steps {
        sh '''    env.NODEJS_HOME = "${tool \'8.11.2\'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    // on windows
    env.PATH="${env.NODEJS_HOME};${env.PATH}"
    sh \'npm --version\''''
      }
    }
  }
}