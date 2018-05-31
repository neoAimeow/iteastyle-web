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
        sh '''ssh root@118.178.131.105 rm -rf /root/service/iteastyle-web
'''
        sh '''ssh root@118.178.131.105 mkdir /root/service/iteastyle-web
'''
        sh 'scp docker-compose.yml root@118.178.131.105:/root/service/iteastyle-web/docker-compose.yml'
      }
    }
  }
}