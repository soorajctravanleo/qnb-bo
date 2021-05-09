node(){
     stage('Cloning Git') {
        checkout scm
    }

    stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'sudo npm i'
            echo "Modules installed"
        }
    }

    stage('Build') {
        nodejs('nodejs') {
            sh 'sudo npm run build'
            echo "Build completed"
        }

    }

    // stage('Package Build') {
    //     sh "cp dist/automationdemo/ /var/www/html/qnb_angular"
    // }
}