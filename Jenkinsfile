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
        sh 'apk add --update --no-cache openssh sshpass'
        withCredentials([usernamePassword(credentialsId: 'server-118.178.131.105', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh 'echo $PASSWORD'
          echo USERNAME
          echo "username is $USERNAME"
          sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 rm -rf /root/service/iteastyle-web'
          sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 mkdir /root/service/iteastyle-web'
          sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no docker-compose.yml $USERNAME@118.178.131.105:/root/service/iteastyle-web/docker-compose.yml'
          sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no -r dist $USERNAME@118.178.131.105:/root/service/iteastyle-web/'
        }

      }
    }
  }
}