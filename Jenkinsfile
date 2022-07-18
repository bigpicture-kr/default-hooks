pipeline {
    agent any
    stages {
        stage('BUILD IMAGE') {
            steps {
                sh '''
                # 이미지 새로 빌드
                docker build --build-arg NPM_TOKEN=${NPM_TOKEN} -t default-hooks-image .
                '''
            }
        }
        stage('RUN CONTAINER') {
            steps {
                sh'''
                # 이미 돌아가고 있는 컨테이너가 있다면
                if test ! -z "$(docker ps -af name=default-hooks-container | grep -w default-hooks-container$)"; then
                    docker stop default-hooks-container && docker rm default-hooks-container
                fi
                
                # 새로 띄운다
                docker run -itd --name default-hooks-container -e VIRTUAL_HOST=default-hooks.bigpicture.team default-hooks-image:latest

                # 불필요한 none 이미지들 삭제
                docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
                '''
            }
        }
    }
}