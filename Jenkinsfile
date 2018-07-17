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
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm install'
        sh 'npm run build'
        sh 'sed -i "s/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g" /etc/apk/repositories'
        sh 'apk add --update --no-cache openssh sshpass'
        script {
          if (env.BRANCH_NAME == 'master') {
            withCredentials(bindings: [usernamePassword(credentialsId: 'server-118.178.131.105', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 rm -rf /root/service/iteastyle-web'
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 mkdir /root/service/iteastyle-web'
              sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no docker-compose.yml $USERNAME@118.178.131.105:/root/service/iteastyle-web/docker-compose.yml'
              sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no -r dist/* $USERNAME@118.178.131.105:/root/service/iteastyle-web/'
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web/docker-compose.yml stop '
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web/docker-compose.yml rm -f '
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web/docker-compose.yml up -d'
              bearychatSend 'iteastyle-web开发环境发布成功，快用力操它！'
            }
          } else {
            withCredentials(bindings: [usernamePassword(credentialsId: 'server-118.178.131.105', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 rm -rf /root/service/iteastyle-web-test'
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 mkdir /root/service/iteastyle-web-test'
              sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no docker-compose-test.yml $USERNAME@118.178.131.105:/root/service/iteastyle-web-test/docker-compose.yml'
              sh 'sshpass -p $PASSWORD scp -v -o StrictHostKeyChecking=no -r dist/* $USERNAME@118.178.131.105:/root/service/iteastyle-web-test/'
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web-test/docker-compose.yml stop '
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web-test/docker-compose.yml rm -f '
              sh 'sshpass -p $PASSWORD ssh -v -o StrictHostKeyChecking=no $USERNAME@118.178.131.105 docker-compose -f /root/service/iteastyle-web-test/docker-compose.yml up -d'
              bearychatSend 'iteastyle-web正式环境发布成功，开瓶红酒庆祝啊~'

            }
          }
        }

      }
    }
  }
}