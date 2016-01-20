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
  "keyup #cardName": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-name").html(line);
  },
  "keyup #manaCost": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-mana-cost").html(line);
  },
  "keyup #mainType": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-main-type").html(line);
  },
  "keyup #subType": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-sub-type").html(line);
  },
  "keyup #rulesText": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-rules-text").html(line);
  },
  "keyup #flavorText": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-flavor-text").html(line);
  },
  "keyup #power": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-power").html(line);
  },
  "keyup #toughness": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-toughness").html(line);
  },
  "keyup #imageUrl": function(event) {
    var line = String($(event.currentTarget).val());
    console.log(line);
    $(".card-image").html(line);
  },
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