@Library('piper-lib-os') _
node() {
       stage('init') {
        echo "starting stage prepare"
        checkout scm
        echo "checkout scm successful"
        fioriOnCloudPlatformPipeline script:this
         //tmsUpload script: this      
       // fioriOnCloudPlatformPipeline(script: this, customDefaults: '.pipeline/config.yml')
        echo "end of stage prepare"
    }  
     // this is currently WIP - need to be adjusted to pickup SonarQube properties file.  
     /*stage('sonarScanner') {
        echo "starting SonarQube"
            verbose:true
        sonarExecuteScan script: this
        echo "end of sonarQube"
    } 
    */
       stage('tmsUpload') {
        echo "starting tms Upload"
            //set mtaPath: '/var/jenkins_home/workspace/P1_1_REST_persist_in_Memory@2/com.sap.piper.node.hello.world.mtar'
           
                   sh """
                   cp /var/jenkins_home/workspace/p2_main@2/com.sap.piper.node.hello.world.mtar /var/jenkins_home/workspace/p2_main 
                   """
        tmsUpload script: this
        echo "end of tms upload"
    }
}
