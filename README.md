
* [How to build a blockchain network using Hyperledger Fabric and Composer](https://medium.freecodecamp.org/how-to-build-a-blockchain-network-using-hyperledger-fabric-and-composer-e06644ff801d) - A tutorial for new blockchain developers
* [REST-server wiki](https://github.com/hyperledger/composer/wiki/REST-Server)
* [upgrading-bna](https://hyperledger.github.io/composer/v0.19/business-network/upgrading-bna)
* [development-tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html)
* [update-dev-en](https://hyperledger.github.io/composer/latest/installing/update-dev-env.html)

#### CLEAN & RESTART 
First clean  
```
npm uninstall -g composer-cli  
npm uninstall -g composer-rest-server  
npm uninstall -g generator-hyperledger-composer  
```
more [here](https://hyperledger.github.io/composer/latest/installing/uninstall-dev-env.html) 

1. Composer CLI tools: 
`npm install -g composer-cli`  
`npm install -g composer-cli@unstable`  

2. REST:  
`npm install -g composer-rest-server`  
`npm install -g composer-rest-server@unstable`  

3. Some things for generating code:  
```
npm install -g generator-hyperledger-composer  
npm install -g yo  
npm install -g yo generator-hyperledger-composer  
```

4. Hyperledger Fabric runtime to deploy  
```
#Create a directory and let's name it fabric-tools  
mkdir ~/fabric-tools && cd ~/fabric-tools  
```
	
5. inside fabric-tools:  
```
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip  
unzip fabric-dev-servers.zip  
```

6. run a local Hyperledger Fabric runtime.  
```
./downloadFabric.sh  
./startFabric.sh  
./createPeerAdminCard.sh  
```

7) then create a businesse network over YO  
`yo hyperledger-composer:businessnetwork`   
https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial.html  


8) yo hyperledger-composer:businessnetwork  
`composer archive create -t dir -n .`  

9) install the composer runtime with:  
`composer network install --card PeerAdmin@hlfv1 --archiveFile lithopia@0.0.1.bna` 

10) deploy the business network:  
`composer network start --networkName lithopia --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`
	
11) import the network administrator card into the network:  
`composer card import --file networkadmin.card	`  

12) composer-rest-server  
`composer-rest-server -c admin@lithopia -n never -u true -w true'
	
#### TO RESET
```
composer network reset -c admin@example-network  
#change the files in the model & lib of lithopia  
#change the version of package.json  
composer archive create -t dir -n .  
composer network upgrade -c PeerAdmin@hlfv1 -n lithopia -V 0.0.1  
composer network install -c PeerAdmin@hlfv1 -n lithopia -V 0.0.1  
```
#### PREREQ  
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh  
chmod u+x prereqs-ubuntu.sh  
./prereqs-ubuntu.sh  
```
