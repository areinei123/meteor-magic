Template.cards.helpers ({
  cards: function(){
    // var setId = Sets.findOne(Session.get('setId'));
    // console.log(setId);
    return Cards.find({})//({setId: setId._id});
  }
});

// Template.card.helpers ({
//   images: function () {
//     return Images.find({'metadata.owner': cardId}); // Where Images is an FS.Collection instance
//   }
// });

Template.cardNew.helpers({
  setData: function() {
    return Sets.findOne(Session.get('setId'));
  }
});

Template.cardNew.events({
  "submit .new-card": function(event) {
    event.preventDefault();
    var name = event.target.cardName.value;
    var manaCost = event.target.manaCost.value;
    var mainType = event.target.mainType.value;
    var subType = event.target.subType.value;
    var rulesText = event.target.rulesText.value;
    var flavorText = event.target.flavorText.value;
    var power = event.target.power.value;
    var toughness = event.target.toughness.value;
    // var file = $('#imageUpload').get(0).files[0];
    // var fileObj = Images.insert(file);
    var imageUrl = event.target.imageUrl.value;
    var setId = Sets.findOne(Session.get('setId'));
    Cards.insert({
      name: name,
      manaCost: manaCost,
      mainType: mainType,
      subType: subType,
      rulesText: rulesText,
      flavorText: flavorText,
      power: power,
      toughness: toughness,
      imageUrl: imageUrl,
      setId: setId
    });
    event.target.cardName.value = "";
    event.target.manaCost.value = "";
    event.target.mainType.value = "";
    event.target.subType.value = "";
    event.target.rulesText.value = "";
    event.target.flavorText.value = "";
    event.target.power.value = "";
    event.target.toughness.value = "";
    event.target.imageUrl.value = "";
  }
});