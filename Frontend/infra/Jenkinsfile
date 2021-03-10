node {
    checkout scm

    docker.withRegistry('https://localhost:5000') {

        def customImage = docker.build("english-playgrounds:${env.BUILD_ID}")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
