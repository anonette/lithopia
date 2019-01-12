# LITHOPIA/LITHOPY project
Design fiction prototype using Hyperldger Composer and Fabric to build a blockchain solution and smart contracts for a fictional village called Lithopia in Czech republic.  The project is inspired by stories from the Cinovec region of a facades of family houses covered in lithium powder. In the 1980s, the former miners had regarded lithium’s glittering powder as junk material freely available for the exterior decoration of houses.  

During 2017 elections the Czech Republic went through a Lithium craze without having ever mined a single grain of lithium ore. The winning party scored extra 10 percent points for promising a lithium paradise for all. As response to the populist promise and the ongoing speculation in Lithium, the Lithopy team created its own fairy-tale scenario. In Lithopy, all sorts of promises and three sorts of mining come together: mineral extraction, big data mining and blockchain mining.  
The multiscreen movie that accompanies the prototypes  advertises a Sunny Day in Lithopy:  
`”Sunny days are made for transactions. No clouds prevent satellites from keeping an eye on contracts being made and assets changing hands. People exchange goods, make payments, marry and divorce. All the hustle and bustle of sunny days is recorded by the digital decentralised ledger of blockchain. Hugs are big and kisses are many to make sure satellites recognise and blockchain records affection, love and friendship. In Lithopy all social contact is a smart contract.“`

The project comprises from several prototypes of smart contracts, documentation of their testing, and a design fiction move and installation:

 - multi-screen installation and movie
 - BNA (business networ) definition and several transactions (smart contracts) deployed on Hyperledger Fabric  as an art/design fiction
 - Node RED dashboard enabling interaction with the smart contracts and other services in Lithopia 

## Lithopia Dashboard in Node-RED
This is a design fiction dashboard for Lithopians used to follow satellites (and drones) in order to transact over Hyperledger Composer/Fabric based smart contracts, to follow the LiCoin cryptocurrency and its relations to the Lithium sentiments and markets. 
In the [LithopiaNodeRed.json](https://github.com/anonette/lithopia/blob/master/LithopiaNodeRed.json) file there are **three columns**:
### Basic info
**Basic info on Lithopia, Lithopians, their properties, marriages and partnerships**
1. **Retro LCD display:** courtesy of Peter Scargill ([link](https://tech.scargill.net/lcd-display-for-node-red/))
2. **Openweather widget**: courtesy of FRED ([link](http://developers.sensetecnic.com/article/a-node-red-flow-to-monitor-the-weather/)). 
   - to which I added text-to-speech node for weather announcement.
3. **Openweather icon**: generating and showing html objects IMG based on this [flow](https://flows.nodered.org/flow/2f1aaf0635f9bf23207152682323240a). 
   - Trick is to create the payload with the tags in a  function-node and then in the template-node just represent it with `<div ng-bind-html="msg.payload"></div>`
4. **Texfields on Lithopians, property, marriages Hyperlegder GET commands**: see http://anonette.net:3000/explorer   
   - we use http-node with get command to query the REST-API composer contract with switch-node and [JSONATA](https://docs.jsonata.org/).  
   - to get the requested data out of complex JSON, see [string functions](https://docs.jsonata.org/string-functions.html) and handeling of [expressions](https://console.bluemix.net/docs/services/IoT/GA_information_management/mapping_expression_language.html#mapping_expression ).  
   - To test also try the [online parser](http://try.jsonata.org/). 
   - another [Useful resource](https://youtu.be/PbEoHxFOdmE?t=600) to learn how to work with SWITCH  - courtesy Steve Cope 

### Transactions
**Info on the Sentinel2A satellite position, view on Earth from ISS, forms to blockchain transactions on how to become Lithopian, register a property or parnership**
 1. **Tracking satellites on a map:** important to get the TLE data for the satellite nodes from  [https://www.celestrak.com/NORAD/elements/supplemental/](https://www.celestrak.com/NORAD/elements/supplemental/)
then use instructions from [node-red-satellites node](https://flows.nodered.org/node/node-red-contrib-satellites) and [world-map-node](https://flows.nodered.org/node/node-red-contrib-web-worldmap).

 2. **ISS real time video of Earth**:  just video embedded in node-red templat.
 
 3. **Hyperleder Composer REST API POST commands**: allowing participants to register on the blockchain their names, property and type of partnerships. The challenging part here was to figure out how to extract values from the JSON object created by the hyperldger REST API in Basic info part,  here is the example of such object: `[{"$class":"org.lithopia.basic.LithopiaPlace","name":"Balcony","flagColors":[],"requestSources":[],"datasetIds":[],"owner":"Yair"},{"$class":"org.lithopia.basic.LithopiaPlace","name":"Balcony2","flagColors":[],"requestSources":[],"datasetIds":[],"owner":"Yair"}]`
 
We need just this part `payload.(name & ' owned by ' & owner)` to get `["Balcony owned by Yair","Balcony2 owned by Yair"]`that appears in the text-node (after csv-node).

 ### Markets
**Sentiment analysis of Twitter feeds on Lithium and cryptocurrency exchange for Lithopians** 

 1. **Twitter sentiment analysis:** Combines examples from [Jelastic](https://jelastic.com/blog/node-red-cloud-hosting-for-tweeter-feed-analysis/) and [IBM](https://www.ibm.com/blogs/bluemix/2015/11/analyze-tweets-in-30-minutes/). Excellent source is also [Luc Bors blog](http://lucbors.blogspot.com/2018/09/how-to-use-node-red-to-interact-with.html).  For the node-red-gauge UI telling when to buy or sell LiCoins based on the sentimens, courtesy of [Tim Minter](https://flows.nodered.org/flow/3fa024a69e24d94b4985934ce931aa7d)
 
 2. **Cryptocurrency charts**: Followed Node RED [ programming guide](http://noderedguide.com/cryptocurrencies-and-node-red/) on Binance node, needs improvement.

## Hyperledger Composer BNA and transactions (JS) deployed on Fabric
### BNA and JS files
Lithopia "business network" comprises from lithopians and their assets (properties, partnerships, LiCoins)  transacted based on data from drones and satellites that are triggered by gestures Christo style coverings of places and large objects (LiCoin Yap). 
Possible transactions: change ownership of property, become part of a parnership or marriage (that can involve more parties) for a defined period of time (inspired by [SmartVows project](https://smartvows.com/) ).
**CTO file defining the network:**
```
    /* global getParticipantRegistry getAssetRegistry getFactory */

/**

* A satellite color reading has been received

* @param  {org.lithopia.basic.Flagcolor}  flagcolor - the Flagcolor transaction

* @transaction

*/

async  function  flagColor(flagcolor) { // eslint-disable-line no-unused-vars

const  place  =  flagcolor.place;

//console.log('Checking the flag color ' + flagcolor.flagColor + ' to place ' + flagcolor.$name);

if (place.flagColors) {

place.flagColors.unshift(flagcolor);

place.requestSources.unshift(flagcolor);

place.datasetIds.unshift(flagcolor);

} else {

place.flagColors  = [flagcolor];

place.requestSources  = [flagcolor];

place.datasetIds  = [flagcolor];

}

// add the satelliteReading to the Lithopian Place

const  placeRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaPlace');

await  placeRegistry.update(place);

}

/**

* LithopiaPlaceSold transaction triggered by satellite data changing the owner of a property

* @param  {org.lithopia.basic.LithopiaPlaceSold}  lithopiaPlaceSold - the LithopianPlaceSold transaction

* @transaction

*/

async  function  selling(lithopiaPlaceSold) { // eslint-disable-line no-unused-vars

const  place  =  lithopiaPlaceSold.place;

const  flag  =  place.flagColors[0].flagColor;

// if thecolor didn't change, the owner remains

if (flag  ===  'red'){

place.owner  =  lithopiaPlaceSold.newOwner.name;

}

else{

place.owner  =  lithopiaPlaceSold.place.owner;

}

// update the newOwner

const  assetRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaPlace');

await  assetRegistry.update(place);

// emit who is the old or new owner

let  placeEvent  =  getFactory().newEvent('org.lithopia.basic', 'LithopiaPlaceTransactions');

placeEvent.place  =  lithopiaPlaceSold.place;

placeEvent.newOwner  =  place.owner;

emit(placeEvent);

}

/**

* Lithopians entering partnership contract

* @param  {org.lithopia.basic.Partners}  partnering - the Partners transaction

* @transaction

*/

async  function  partnering(partnering) { // eslint-disable-line no-unused-vars

const  contract  =  partnering.contract;

if (contract.partners) {

contract.partners.push(partnering);

}

else{

contract.partners  = [partnering];

}

// add the partners to the contract

const  placeRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaMarriage');

await  placeRegistry.update(contract);

// emit the new partnership in Lithopia

let  partnerEvent  =  getFactory().newEvent('org.lithopia.basic', 'NewPartnershipinLithopia');

partnerEvent.contract  =  partnering.contract;

partnerEvent.partners  =  partnering.contract.partners;

emit(partnerEvent);

}

/**

* LithopiaMarriage transaction changng the status of some partners

* @param  {org.lithopia.basic.Marriage}  marrying - the LithopianPlaceSold transaction

* @transaction

*/

async  function  married(marrying) { // eslint-disable-line no-unused-vars

const  partner  =  marrying.partnerMarriage;

const  partners  =  marrying.contract.partners;

//console.log(Object.values(partners));

//console.log(partners[0].newPartner);

//console.log(partner.name);

//console.log(partner);

let  i;

for (i=0; i  <  partners.length; i++){

if (partners[i].newPartner.includes(partner.name)){

partner.status  =  "Married";

}

else

{

partner.status  =  "Single";

}

}

// change the status of the partnership based on enum

const  participantRegistry  =  await  getParticipantRegistry('org.lithopia.basic.Lithopian');

await  participantRegistry.update(partner);

}

**JS file defining transactions:**

    /* global getParticipantRegistry getAssetRegistry getFactory */

/**

* A satellite color reading has been received

* @param  {org.lithopia.basic.Flagcolor}  flagcolor - the Flagcolor transaction

* @transaction

*/

async  function  flagColor(flagcolor) { // eslint-disable-line no-unused-vars

const  place  =  flagcolor.place;

//console.log('Checking the flag color ' + flagcolor.flagColor + ' to place ' + flagcolor.$name);

if (place.flagColors) {

place.flagColors.unshift(flagcolor);

place.requestSources.unshift(flagcolor);

place.datasetIds.unshift(flagcolor);

} else {

place.flagColors  = [flagcolor];

place.requestSources  = [flagcolor];

place.datasetIds  = [flagcolor];

}

// add the satelliteReading to the Lithopian Place

const  placeRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaPlace');

await  placeRegistry.update(place);

}

/**

* LithopiaPlaceSold transaction triggered by satellite data changing the owner of a property

* @param  {org.lithopia.basic.LithopiaPlaceSold}  lithopiaPlaceSold - the LithopianPlaceSold transaction

* @transaction

*/

async  function  selling(lithopiaPlaceSold) { // eslint-disable-line no-unused-vars

const  place  =  lithopiaPlaceSold.place;

const  flag  =  place.flagColors[0].flagColor;

// if thecolor didn't change, the owner remains

if (flag  ===  'red'){

place.owner  =  lithopiaPlaceSold.newOwner.name;

}

else{

place.owner  =  lithopiaPlaceSold.place.owner;

}

// update the newOwner

const  assetRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaPlace');

await  assetRegistry.update(place);

// emit who is the old or new owner

let  placeEvent  =  getFactory().newEvent('org.lithopia.basic', 'LithopiaPlaceTransactions');

placeEvent.place  =  lithopiaPlaceSold.place;

placeEvent.newOwner  =  place.owner;

emit(placeEvent);

}

/**

* Lithopians entering partnership contract

* @param  {org.lithopia.basic.Partners}  partnering - the Partners transaction

* @transaction

*/

async  function  partnering(partnering) { // eslint-disable-line no-unused-vars

const  contract  =  partnering.contract;

if (contract.partners) {

contract.partners.push(partnering);

}

else{

contract.partners  = [partnering];

}

// add the partners to the contract

const  placeRegistry  =  await  getAssetRegistry('org.lithopia.basic.LithopiaMarriage');

await  placeRegistry.update(contract);

// emit the new partnership in Lithopia

let  partnerEvent  =  getFactory().newEvent('org.lithopia.basic', 'NewPartnershipinLithopia');

partnerEvent.contract  =  partnering.contract;

partnerEvent.partners  =  partnering.contract.partners;

emit(partnerEvent);

}

/**

* LithopiaMarriage transaction changng the status of some partners

* @param  {org.lithopia.basic.Marriage}  marrying - the LithopianPlaceSold transaction

* @transaction

*/

async  function  married(marrying) { // eslint-disable-line no-unused-vars

const  partner  =  marrying.partnerMarriage;

const  partners  =  marrying.contract.partners;

//console.log(Object.values(partners));

//console.log(partners[0].newPartner);

//console.log(partner.name);

//console.log(partner);

let  i;

for (i=0; i  <  partners.length; i++){

if (partners[i].newPartner.includes(partner.name)){

partner.status  =  "Married";

}

else

{

partner.status  =  "Single";

}

}

// change the status of the partnership based on enum

const  participantRegistry  =  await  getParticipantRegistry('org.lithopia.basic.Lithopian');

await  participantRegistry.update(partner);

}
```

### Deployment of Fabirc
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


**Lithopy:** concept Denisa Kera and Petr Šourek, director Petr Šourek, designer Eva Holá, photography Jan Hrdý, installation and 3D print Jaroslav Svítek, blockchain and Node RED development Denisa Kera and Yair Reshef, satellite image processing Mateusz Kraiński, and team, text   Denisa Kera, Iva Knobloch, Petr Šourek.
