node(){
     stage('Cloning Git') {
        checkout scm
    }

    stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'npm i'
            echo "Modules installed"
        }
    }

    stage('Build') {
        nodejs('nodejs') {
            sh 'npm run build'
            echo "Build completed"
        }

    }

    // stage('Package Build') {
    //     sh "cp dist/automationdemo/ /var/www/html/qnb_angular"
    // }
}