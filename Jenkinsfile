pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        sh 'ls -al'
        echo 'Starting prepare the app.......'
        sh 'rm -rf /root/tmp'
      }
    }
    stage('build') {
      agent {
        docker {
          image 'docker.io/node:8.11.2-alpine'
          args '-v /root/tmp:/home/node/app'
        }

      }
      steps {
        echo 'Starting build the app.....'
        sh 'npm i cnpm -g --registry=http://registry.npm.taobao.org'
        sh 'cnpm install'
        sh 'npm run clean'
        sh 'npm run build'
        sshagent(credentials: ["ssh-118.178.131.105"]) {
          sh 'ssh root@118.178.131.105 rm -rf /root/service/iteastyle-web'
          sh 'ssh root@118.178.131.105 mkdir /root/service/iteastyle-web'
          sh 'scp docker-compose.yml root@118.178.131.105:/root/service/iteastyle-web/docker-compose.yml'
          sh 'scp -r dist root@118.178.131.105:/root/service/iteastyle-web/'
        }

        sh 'apk add --no-cache openssh'
      }
    }
  }
}