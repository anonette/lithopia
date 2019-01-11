## Lithopia Dashboard in Node-RED
This is a design fiction dashboard for Lithopians used to follow satellites (and drones) in order to transact over Hyperledger Composer/Fabric based smart contracts, to follow the LiCoin cryptocurrency and its relations to the Lithium sentiments and markets. 
In the [LithopiaNodeRed.json](https://github.com/anonette/lithopia/blob/master/LithopiaNodeRed.json) file there are **three columns**:
### Basic info
**Basic info on Lithopia, Lithopians, their properties, marriages and partnerships**
 1. **Retro LCD display:** courtesy of Peter Scargill https://tech.scargill.net/lcd-display-for-node-red/
 2. **Openweather widget**: courtesy of FRED http://developers.sensetecnic.com/article/a-node-red-flow-to-monitor-the-weather/ to which I added text-to-speech node for weather announcement.
 3. **Openweather icon**: generating and showing html objects IMG based on 
https://flows.nodered.org/flow/2f1aaf0635f9bf23207152682323240a 
Trick is to createthe payload with the tags  in a  function-node and then in the template-node just represent it with `<div ng-bind-html="msg.payload"></div>`
 4. **Texfields on Lithopians, property, marriages**: all use http-node with get command to query the REST-API composer contract on http://anonette.net:3000/explorer and with switch-node and JSONATA get the requesteddata out of the  complex JSON, basic JSONARA https://docs.jsonata.org/string-functions.html
https://console.bluemix.net/docs/services/IoT/GA_information_management/mapping_expression_language.html#mapping_expression 
To test also http://try.jsonata.org/. Useful resource to learn how to work with SWITCH  - courtesy [Steve Cope from min 10.](https://www.youtube.com/watch?v=PbEoHxFOdmE&fbclid=IwAR2rvMT7lKdwk8LwGtcBF7V29AhJ-GAr07tJrVVXCyeA-ZFwSb6hy_akhzo)
### Transactions
**Info on the Sentinel2A satellite position, view on Earth from ISS, forms to blockchain transactions on how to become Lithopian, register a property or parnership**
 5. **Tracking satellites on a map:** important to get the TLE data for the satellite nodes from  [https://www.celestrak.com/NORAD/elements/supplemental/](https://www.celestrak.com/NORAD/elements/supplemental/)
then use instructions from [node-red-satellites node](https://flows.nodered.org/node/node-red-contrib-satellites) and [world-map-node](https://flows.nodered.org/node/node-red-contrib-web-worldmap).
 6. **ISS real time video of Earth**:  just video embedded in node-red templat.
 7. **Hyperleder Composer REST API post commands**: allowing participants to register on the blockchain their names, property and type of partnerships.
 ### **Markets**
 8. Twitter sentiments
 9. Cryptocurrency exchange rates

#### After Restart
```
cd ~/fabric-dev-servers

./startFabric.sh

composer network install --card PeerAdmin@hlfv1 --archiveFile ~/fabric-dev-servers/lithopia/lithopia@0.0.1.bna

composer network start --networkName lithopia --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

#check you have the peerAdminCards
composer card list 

#to run in terminal
composer-rest-server -c admin@lithopia -n never -u true -w true
#or to run in background
pm2 start runRest

#run node-red
pm2 start node-red
```

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
`rm -rf ~/fabric-dev-servers`

#### START
from the [docs](https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial.html)

0. make sure we use the right node version
```
nvm install v8
nvm use v8
```
1. install node packages, CLI tools, rest server and generators
```
npm install -g composer-cli@0.20 composer-rest-server@0.20 generator-hyperledger-composer@0.20 yo
```

2. Hyperledger Fabric runtime to deploy  
```
#Create a directory and let's name it fabric-tools  
mkdir ~/fabric-tools && cd ~/fabric-tools  
```
	
3. inside fabric-tools:  
```
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip  
unzip fabric-dev-servers.zip  
```

4. run a local Hyperledger Fabric runtime.  
```
./downloadFabric.sh  
./startFabric.sh  
./createPeerAdminCard.sh  
```

5. then create a businesse network over YO  
`yo hyperledger-composer:businessnetwork`   

6. yo hyperledger-composer:businessnetwork  
`composer archive create -t dir -n .`  

7. install the composer runtime with:  
`composer network install --card PeerAdmin@hlfv1 --archiveFile lithopia@0.0.1.bna` 

8. deploy the business network:  
`composer network start --networkName lithopia --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`
	
9. import the network administrator card into the network:  
`composer card import --file networkadmin.card	`  

10. composer-rest-server  
`composer-rest-server -c admin@lithopia -n never -u true -w true`
	
#### RESET
```
composer network reset -c admin@example-network  
#change the files in the model & lib of lithopia  
#change the version of package.json  
composer archive create -t dir -n .  
composer network upgrade -c PeerAdmin@hlfv1 -n lithopia -V 0.0.1  
composer network install -c PeerAdmin@hlfv1 -n lithopia -V 0.0.1  
```
#### PREREQ  
from the [docs](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html)  
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh  
chmod u+x prereqs-ubuntu.sh  
./prereqs-ubuntu.sh  
```

this bit us before, cuoldnt start the rest server because of gPRC node module issues  
#### rebuild grpc
`cd ~/.nvm//versions/node/v8.14.1/lib/node_modules/composer-rest-server`
`npm rebuild`

#### redeploy
`./tearDownFabric`

1. remove preconfigurations previous cards and identities  
`rm -fr ~/.composer`

2. re-create the admin card  
`./createPeerAdminCard.sh`

3. if using the same bna, no need to yo it again  
```
composer network install --card PeerAdmin@hlfv1 --archiveFile ~/fabric-dev-servers/lithopia/lithopia@0.0.1.bna
```

4. re-start network  
`composer network start --networkName lithopia --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`

5. start rest   
`composer-rest-server -c admin@lithopia -n never -u true -w true`

#### LINKS

* [How to build a blockchain network using Hyperledger Fabric and Composer](https://medium.freecodecamp.org/how-to-build-a-blockchain-network-using-hyperledger-fabric-and-composer-e06644ff801d) - A tutorial for new blockchain developers
* [REST-server wiki](https://github.com/hyperledger/composer/wiki/REST-Server)
* [upgrading-bna](https://hyperledger.github.io/composer/v0.19/business-network/upgrading-bna)
* [development-tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html)
* [update-dev-en](https://hyperledger.github.io/composer/latest/installing/update-dev-env.html)
