pipeline {
  agent none
  stages {
    stage('Initializing') {
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