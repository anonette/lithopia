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
    const newOwner = lithopiaPlaceSold.newOwner;
    // if thecolor didn't change, the owner remains
    if (flag  ===  'red' && newOwner.origin !== 'Czech'){
    place.owner  =  newOwner.name;
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
    const  participantRegistry  =  await  getParticipantRegistry('org.lithopia.basic');
    await  participantRegistry.update(partner);
    }
    
    /** 
    * Create the participant needed for the demo
    * @param {org.lithopia.basic.Demo} dm  Demo transaction
    * @transaction
    */
    async function demo(dm) { // eslint-disable-line no-unused-vars
    const factory = getFactory();
    const registry = await getParticipantRegistry('org.lithopia.basic.Outsider');
    const outsider = factory.newResource('org.lithopia.basic', 'Outsider', 'Merkel');
    outsider.origin = "German";
    await registry.add(outsider);
    }