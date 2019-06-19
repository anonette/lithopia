# LITHOPIA/LITHOPY project
![Lithopia image](https://drive.google.com/uc?id=1EJ3ooXc-ZBzpwv0-ytiNsy-_ZOEUxagv)

1. [ Description. ](#desc)
2. [ Prototypes. ](#usage)
3. [ Dashboard. ](#dash)
4. [ Satellite scanner. ](#scanner)
5. [ Blockchain contracts. ](#hype)
5. [ Workshop. ](#workshop)
7. [ Credits. ](#credit)


<a name="desc"></a>
## Description
The design fiction village Lithopia explores the **extreme scenarios of future data and blockchain governance, but also resistance** by using Hyperledger Composer and Fabric to deploy smart contracts triggered by satellite and drone data. The villagers in this fictional place use satellite and drone data to govern their affairs in an extremely transparent, but also aesthetic manner. They live their lives in front of the all-seeing technical “eyes” of God and Providence, such as Sentinel 2A and B Copernicus satellites, and public drones used as notaries. **Special long gestures, large LiCoins,  but also acts of covering spaces in land-art, Christo manner at strictly defined times trigger the transactions on the Hyperledger blockchain** managed over the Node RED dashboard.     

![](http://gdurl.com/5g5H)  

Lithopia has a **sister city on the Micronesian island of Yap** that uses similar large stone coins to preserve their oral memory of ownership, marriages, and important events. Lithopians deploy their **large 3D printed LiCoins visible to satellites and drones** in various rituals and transactions that trigger the Hyperledger smart contracts. LiCoins are similar in size to the famous Rai stones, but they also **contain lithium in the plastic filaments** used to 3D print them. The LiCoins are moved around to indicate important transactions and contracts on the blockchain. **In their plastic, they mix and hide the illegally obtained lithium from the old mines** to reclaim the ownership of their natural resources. **Hyperledger blockchain for Lithopians is a form of oral culture timestamping all transactions and emphasizing genealogy over exchanges and stewardship over ownership.**

![](http://gdurl.com/P5X2)  

This aesthetic and at times ironic, blockchain and satellite "lithopia" is **inspired by stories from the mining region of Cinovec** about facades of family houses covered in lithium powder. In the 1980s, the former miners had regarded lithium’s glittering powder as a junk material freely available for the exterior decoration of houses. During the 2017 Czech Republic elections, a Lithium craze unleashed, and the winning party scored extra 10 percentage for promising a lithium paradise for all without ever mining even a single grain of lithium ore. The semi-legal facades of the miners family houses suddenly became an unlikely form of fortune, an unintended form of resistance in the speculative lithium wars between the political fractions and corrupt business interests. We intepret this as a start of the **Czech lithium punk genre** and a model of management of resources and emergent technologies.    

To respond to the **populist promises and  ongoing speculations in Lithium, but also similar political projects, such as the calls for national blockchain cryptocurrency**, the Lithopy team continues in the work of these villagers and their lithium punk genre. We support early and extreme forms of adoption of emergent technologies that reproduce the “facade” effect or a hack and bring unintended forms of resistance as alternative to the speculative and extractive powers to be.  

**In Lithopy, all sorts of promises and three sorts of mining come together: mineral extraction, big data mining and blockchain mining** to explore the Czech lithium punk fantasy. The ideal citizen of Lithopia follows in the steps of the good soldier Švejk and follows ad absurdum all emergent technological protocols to embrace all data structures and alghoritms.  The multiscreen movie that accompanies the blockchcain, LiCoins and Node RED prototypes advertises a Sunny Day in Lithopy:  _”A Sunny Day in Lithopy


  _It is a sunny day in Lithopy, a quackerish-hackerish community given to transparency, justice & accountability.

 _In Lithopy, sunny days are made for transactions. No clouds prevent satellites from keeping an eye on you. Satellites track your every move. A decentralized, distributed and public digital ledger of blockchain records every transaction.

 _On sunny days, contracts are made. Assets change hands. People make payments and friends, marry and divorce.

 _Lithopians use coins big enough to catch the eye of a satellite. They shake hands for minutes. When you travel to Lithopy on a sunny day, you never pull your hand back before a Lithopian unless you are less serious about business.

 _In Lithopy, hugs are big and kisses are many to make sure satellites recognize and the blockchain records their affection, love & friendship.

 _There is no excess, no frivolity in their actions. Their all-or-nothing gestures, their fits of laughter, their floods of tears are in fact all well measured. 

 _You may notice the furtive looks they cast toward the sky. Whatever Lithopians do on sunny days,
they do before the face of satellites.

 _In Lithopy, all social contact is a smart contract.“` 

<a name="usage"></a>
## Prototypes
The project comprises from **several prototypes of smart contracts, documentation of their testing, and a design fiction movie and installation:**

 - Multi-screen installation and movie 
 - BNA (business network definition) and several JS transactions (smart contracts) deployed on the Hyperledger Fabric as an art/design fiction
 [CTO model](https://github.com/anonette/lithopia/blob/master/org.lithopia.basic.cto)  
 [JS logic](https://github.com/anonette/lithopia/blob/master/logic.js)
 - Lithopia satellite scanner (developed by Mateusz Kraiński)
[API](http://anonette.net:8000/summary/)
 - Node RED dashboard enabling interaction with the smart contracts and other services in Lithopia
 [Node RED JSON](https://github.com/anonette/lithopia/blob/master/NodeREDMarch2019.json)
 - Proposal for a Lithopia streaming packets service (pay per packet) on the blockchain, where IP packets of fragmented 188-byte streaming packets (Packetized Elementary Stream - PES) are monetized (just as all other data in the future). Lithopians measure their time in packets of data to create a “blockchain-ed” paradise. Packets on a ledger fulfill the **old dream of a divine providence supervising and managing every occurrence and every creature. Blockchain technologies perform what Christianity and Judaism imagined as a continual creation, sometimes described as ( השגחה פרטית‬ Hashgochoh Protis), what Descartes in his “Meditation III” describes as a God that conserves the world by continuously creating it, and what Leibnizian imagines as a pre-established harmony. To stream and timestamp packets on the ledger is to design an all-seeing, all present and perpetually creating God. The timestamps and blocks of all the transactions and activities in the life of the Lithopians is a form of divine providence, but also a magical ritual of protection via God’s eyes.
  
<a name="dash"></a>
## Lithopia Dashboard in Node-RED
[Link](http://anonette.net:1780/ui/#/0)  
![](http://gdurl.com/Gruk)  
This is a design fiction dashboard for Lithopians used to follow satellites (and drones) in order to transact over Hyperledger Composer/Fabric based smart contracts, to follow the LiCoin cryptocurrency and its relations to the Lithium sentiments and markets. 
In the [lithopiaFeb22.json](https://github.com/anonette/lithopia/blob/master/lithopiaFeb22.json) file there are **three columns**:

### DATE, TIME & WEATHER
**Basic info on Lithopia**
1. **Retro LCD display:** courtesy of Peter Scargill ([link](https://tech.scargill.net/lcd-display-for-node-red/))
2. **Openweather widget**: courtesy of FRED ([link](http://developers.sensetecnic.com/article/a-node-red-flow-to-monitor-the-weather/)). 
   - to which I added text-to-speech node for weather announcement (disabled for the installation, present in JSON).
3. **Openweather icon**: generating and showing html objects IMG based on this [flow](https://flows.nodered.org/flow/2f1aaf0635f9bf23207152682323240a). 
   - Trick is to create the payload with the tags in a  function-node and then in the template-node just represent it with `<div ng-bind-html="msg.payload"></div>`
3. **Lithopia**: how to trigger various blockchain transactions and future plans.

### WHO'S WHO
**Basic info on Lithopians, their properties, marriages and partnerships**
1. **Texfields on Lithopians, property, marriages Hyperlegder GET commands**: see http://anonette.net:3000/explorer   
   - we use http-node with get command to query the REST-API composer contract with switch-node and [JSONATA](https://docs.jsonata.org/).  
   - to get the requested data out of complex JSON, see [string functions](https://docs.jsonata.org/string-functions.html) and handeling of [expressions](https://console.bluemix.net/docs/services/IoT/GA_information_management/mapping_expression_language.html#mapping_expression ).  
   - To test also try the [online parser](http://try.jsonata.org/). 
   - another [Useful resource](https://youtu.be/PbEoHxFOdmE?t=600) to learn how to work with SWITCH  - courtesy Steve Cope 

### BLOCKCHAIN TRANSACTIONS 
**Info on the Sentinel2A satellite position, view on Earth from ISS, forms to blockchain transactions on how to become Lithopian, register a property or parnership**
 1. **Tracking satellites on a map:** important to get the TLE data for the satellite nodes from  [https://www.celestrak.com/NORAD/elements/supplemental/](https://www.celestrak.com/NORAD/elements/supplemental/)
then use instructions from [node-red-satellites node](https://flows.nodered.org/node/node-red-contrib-satellites) and [world-map-node](https://flows.nodered.org/node/node-red-contrib-web-worldmap).

 2. **ISS real time video of Earth**:  just video embedded in node-red templat (disabled for the installation, but present in the JSON).
 
 3. **Hyperleder Composer REST API POST commands**: allowing participants to register on the blockchain their names, property and type of partnerships. The challenging part here was to figure out how to extract values from the JSON object created by the hyperldger REST API in Basic info part,  here is the example of such object: `[{"$class":"org.lithopia.basic.LithopiaPlace","name":"Balcony","flagColors":[],"requestSources":[],"datasetIds":[],"owner":"Yair"},{"$class":"org.lithopia.basic.LithopiaPlace","name":"Balcony2","flagColors":[],"requestSources":[],"datasetIds":[],"owner":"Yair"}]`
 
We need just this part `payload.(name & ' owned by ' & owner)` to get `["Balcony owned by Yair","Balcony2 owned by Yair"]`that appears in the text-node (after csv-node).

4.**Credits, Lithopia team**:
First inhabitants ;-)

 ### MARKETS & SENTIMENTS
**Sentiment analysis of Twitter feeds on Lithium and cryptocurrency exchange for Lithopians** 

 1. **Twitter sentiment analysis:** Combines examples from [Jelastic](https://jelastic.com/blog/node-red-cloud-hosting-for-tweeter-feed-analysis/) and [IBM](https://www.ibm.com/blogs/bluemix/2015/11/analyze-tweets-in-30-minutes/). Excellent source is also [Luc Bors blog](http://lucbors.blogspot.com/2018/09/how-to-use-node-red-to-interact-with.html).  For the node-red-gauge UI telling when to buy or sell LiCoins based on the sentimens, courtesy of [Tim Minter](https://flows.nodered.org/flow/3fa024a69e24d94b4985934ce931aa7d)
 
 2. **Cryptocurrency charts**: Followed Node RED [ programming guide](http://noderedguide.com/cryptocurrencies-and-node-red/) on Binance node, needs improvement.

<a name="scanner"></a>
## Lithopia scanner 
Application for the Lithopia project, which extracts latest Sentinel-2 image for a given area and analyses it for a presence of a visual marker. If such marker is detected, the application is triggerring a blockchain contract. [More](https://github.com/mt-krainski/lithopia_scanner)

<a name="hype"></a>
## Hyperledger Composer BNA and transactions (JS) deployed on Fabric
### BNA and JS files
Lithopia "business network" comprises from lithopians and their assets (properties, partnerships, LiCoins)  transacted based on data from drones and satellites that are triggered by gestures Christo style coverings of places and large objects (LiCoin Yap). 
Possible transactions: change ownership of property, become part of a parnership or marriage (that can involve more parties) for a defined period of time (inspired by [SmartVows project](https://smartvows.com/) ).
**CTO file defining the network:**
```
/*
 /**
 * Sample business network definition.
 */
namespace org.lithopia.basic
/**
 * Location in Lithopia visible to satellites owned by a Lithopian
 */
asset LithopiaPlace identified by name {
  o String name
  o Flagcolor[] flagColors optional
  o Flagcolor[] requestSources optional 
  o Flagcolor[] datasetIds optional
  o String owner
}
/**
 * An abstract transaction that is related to a LithopiaPlace
 */
abstract transaction LithopiaPlaceTransaction {
  --> LithopiaPlace place
}
/**
 * A satellite reading for a GPS location identifying a color
 */
transaction Flagcolor extends LithopiaPlaceTransaction {
  o String flagColor 
  o String requestSource 
  o String datasetId
}
/**
 * Changing the owner of the place based on the color identified by a satellite
 */
transaction LithopiaPlaceSold extends LithopiaPlaceTransaction {
  -->Lithopian newOwner
}
/**
* Announcing a change of ownership of a place
 */
event LithopiaPlaceTransactions {
  --> LithopiaPlace place
  o String newOwner
}
/**
 * Marriage contract in Lithopia 
 */
asset LithopiaMarriage identified by name {
  o String name
  o String period
  o Partners[] partners optional
}

/**
 * Partnering, friendship and marriages  in Lithopia 
 */
abstract transaction LithopiaPartnering {
  -->LithopiaMarriage contract
}

/**
 * Lithopians entering some contract in pairs or groups 
 */
transaction Partners extends LithopiaPartnering {
  o String[] newPartner
}
/**
 * Announcing a marriage between individuals in Lithopia  
 */
event NewPartnershipinLithopia {
  -->LithopiaMarriage contract
  o Partners[] partners
}
/**
 * Marrying someone or few people  in Lithopia  
 */
transaction Marriage extends LithopiaPartnering {
   -->Lithopian partnerMarriage
}
/**
 *  Lithopian living in Lithopia
 */
participant Lithopian identified by name {
  o String name
  o String status optional 
}
```
**JS logic file** 
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
```

### Deployment of Fabirc
#### After Restart
```bash
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

<a name="workshop"></a>
## Workshop

While the first decade of distributed ledger technologies (DLTs) was mainly about transactions between individuals (Bitcoin and numerous crypto-alt-currency projects), we are entering a phase which expands transactions into contracts and involves new actors. The new generation of DLTs emphasize these interactions with corporate and institutional actors through self-executing “smart contracts” (Ethereum, Ripple and Corda platforms and protocols)  along “machine-to-machine” transactions involving IoTs using ledger technologies (IOTA) and soon probably AI. The increasing complexity of transactions and interactions over DLTs is leading to attempts to consolidate platforms (Enterprise Ethereum Alliance, Linux Hyperledger Fabric 1.0) and enable interoperability. The original, libertarian and crypto-anarchist emphasis on privacy and anonymity of the individuals and their transactions (as stated in the original white paper) is transforming into a pragmatic search for convergences of DLTs with existing social, but also technological infrastructures (IoTs, institutions, banks, supply chains).

How to engage with the promises and threats of blockchain future infrastructure, algo and data governance?

How to respond to the technological, ethical, social and legal opportunities and limits of the so-called smart contracts that automatize all decision making processes?

What are the consequences of timestamping all our data to ensure the authenticity of media in an age of rampant simulations and fakes

How to combine existing institutions with this new infrastructure? 

On which level to regulate these convergences?

* [How to run a workshop on stakeholder involvement in blockchain futures](https://docs.google.com/document/d/182Ecyipv7Aytc2i7a2DK1kxtNB3J_RsW3PkQfA7ez5c/edit#) - Summary of tools and activities for the workshop with methodological overview
* [Forms for the participants](https://docs.google.com/document/d/182Ecyipv7Aytc2i7a2DK1kxtNB3J_RsW3PkQfA7ez5c/edit#) - Modular forms used by participants/stakeholders in the workshop
* [Stakeholders cards used by the participants for the simulation game](https://docs.google.com/document/d/1vCqB2JdEchHp9ddEYwUvh3Z0dQdpHCF1YJC7t91zZLU/edit#) -To give one to each group or to an individual (depending on the size of the workshop)
*  [Basic vocabulary of terms](https://docs.google.com/document/d/1yHcElO57kkqf6I6ATkSFkLfS7QQfCNO96BfpfFkp-iY/edit#) - To give one copy to each participant 
* [Issue cards, summary of policy and technology issues](https://docs.google.com/document/d/1zrDojr8z9UzD0jYacMxvlZ4N_dijGdf8AlL3TwQ7MaE/edit#) - To give the whole set to all participants so they pick and choose one issue (you can also assign the issues randomly) 
* Examples of adverserial (evil)code to play with in the workshop: 

[CTO model](https://github.com/anonette/lithopia/blob/master/LithopiaWorkshop.cto)  
[JS logic](https://github.com/anonette/lithopia/blob/master/LithopiaWorkshop.js)

<a name="credit"></a>
## Credits
**Lithopy:** <br />
concept: Denisa Kera and Petr Šourek<br />
script: Petr Šourek<br />
designer: Eva Holá<br />
director of photography: Jan Hrdý, Michal Krásl<br />
editor: Miloslav Holman<br />
installation and 3D print: Virtuoso by Swetja<br />
blockchain and Node RED: Denisa Kera and Yair Reshef<br />
satellite image processing: Mateusz Kraiński<br />
music: Swetja, Ivan Zelenka<br />
sound: Libor Ščerba, Swetja<br />
actors: Dan Dittrich, Eva Čechová, Dan Šváb, Barbara Humel, Justin Svoboda, Radim Klásek, Vojtěch Bárta, Zdeněk Žatečka, Olga Vincencová, Alice Šourková, Ivana Runštuková, Marie Johnson<br />
technician: Roman Trochta<br />
producer: Petra Brodská<br />
director: Petr Šourek
