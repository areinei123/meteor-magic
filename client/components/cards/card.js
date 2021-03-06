Meteor.subscribe("cards");

Template.cards.helpers ({
  cards: function(){
    var setId = Session.get('setId');
    return Cards.find({setId: setId});
  }
});

Template.cardNew.helpers({
  setData: function() {
    return Session.get('setId');
  },
  editCard: function() {
    return Template.instance().editCard.get();
  }
});

Template.cardNew.events({
  "keyup #cardName": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-name").html(line);
  },
  "keyup #manaCost": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-mana-cost").html(line);
  },
  "keyup #mainType": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-main-type").html(line);
  },
  "keyup #subType": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-sub-type").html(line);
  },
  "keyup #rulesText": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-rules-text").html(line);
  },
  "keyup #flavorText": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-flavor-text").html(line);
  },
  "keyup #power": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-power").html(line);
  },
  "keyup #toughness": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-toughness").html(line);
  },
  "keyup #imageUrl": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-image").css('background-image','url('+line+')');
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
    var imageUrl = event.target.imageUrl.value;
    var setId = Session.get('setId');
    Meteor.call("addCard", name, manaCost, mainType, subType, rulesText, flavorText, power, toughness, imageUrl, setId);
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

Template.card.helpers({
  editCard: function(){
    return Template.instance().editCard.get();
  },
  itsACreature: function(){
    var type = this.mainType;
    if (type.indexOf("Creature") > -1) {
      return true
    };
  }
})

Template.card.events({
  "click .delete": function(){
    event.preventDefault();
    var id = this._id;
    Meteor.call("deleteCard", id);
  },
  'click .edit': function(event, template) {
    event.preventDefault();
    var editCard = template.editCard.get();
    template.editCard.set(!editCard);
  }
});

Template.card.created = function(){
  this.editCard = new ReactiveVar(false);
};

Template.cardEdit.events({
  "keyup #cardName": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-name").html(line);
  },
  "keyup #manaCost": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-mana-cost").html(line);
  },
  "keyup #mainType": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-main-type").html(line);
  },
  "keyup #subType": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-sub-type").html(line);
  },
  "keyup #rulesText": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-rules-text").html(line);
  },
  "keyup #flavorText": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-flavor-text").html(line);
  },
  "keyup #power": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-power").html(line);
  },
  "keyup #toughness": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-toughness").html(line);
  },
  "keyup #imageUrl": function(event) {
    var line = String($(event.currentTarget).val());
    $("#card-image").css('background-image','url('+line+')');
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
    var imageUrl = event.target.imageUrl.value;
    Meteor.call("editCard", name, manaCost, mainType, subType, rulesText, flavorText, power, toughness, imageUrl);
  }
});