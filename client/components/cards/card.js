Template.cardNew.events({
  "submit .new-card": function(event) {
    event.preventDefault;
    var name = event.target.cardName.value;
    var manaCost = event.target.manaCost.value;
    var mainType = event.target.mainType.value;
    var subType = event.target.subType.value;
    var rulesText = event.target.rulesText.value;
    var flavorText = event.target.flavorText.value;
    var power = event.target.power.value;
    var toughness = event.target.toughness.value;
    var file = $('#imageUpload').get(0).files[0];
    var fileObj = Images.insert(file);
    var setId = 
    cards.insert({
      name: 'name',
      manaCost: 'manaCost',
      mainType: 'mainType',
      subType: 'subType',
      rulesText: 'rulesText',
      flavorText: 'flavorText',
      power: 'power',
      toughness: 'toughness',
      fileObj: 'fileObj',

    })
  }
});