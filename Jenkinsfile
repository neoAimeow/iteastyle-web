pipeline {
  agent any
  stages {
    stage('Initializing') {
      steps {
        sh '''        echo \'Initializing...\'
        def node = tool name: \'Node-7.4.0\', type: \'jenkins.plugins.nodejs.tools.NodeJSInstallation\'
        env.PATH = "${node}/bin:${env.PATH}"'''
      }
    }
  }
}