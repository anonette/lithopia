

#### CLEAN
(following official uninstall [guide](https://hyperledger.github.io/composer/latest/installing/uninstall-dev-env.html) )
  
```
npm uninstall -g composer-cli  composer-rest-server generator-hyperledger-composer
rm -rf ~/.composer
```
stop and teardown the docker setup
```
export FABRIC_VERSION=hlfv12
~/fabric-dev-servers/stopFabric.sh
~/fabric-dev-servers/teardownFabric.sh
```
clear tools and script folder
'rm -rf ~/fabric-dev-servers'

#### start
0. make sure we use the right node version
```
nvm install v8
nvm use v8
```
1. install node packages, CLI tools, rest server and generators: 
`npm install -g composer-cli@0.20 composer-rest-server@0.20 generator-hyperledger-composer@0.20 yo`

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

#### Links

* [How to build a blockchain network using Hyperledger Fabric and Composer](https://medium.freecodecamp.org/how-to-build-a-blockchain-network-using-hyperledger-fabric-and-composer-e06644ff801d) - A tutorial for new blockchain developers
* [REST-server wiki](https://github.com/hyperledger/composer/wiki/REST-Server)
* [upgrading-bna](https://hyperledger.github.io/composer/v0.19/business-network/upgrading-bna)
* [development-tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html)
* [update-dev-en](https://hyperledger.github.io/composer/latest/installing/update-dev-env.html)
