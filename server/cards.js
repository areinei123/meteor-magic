Meteor.methods({
  addCard: function(name, manaCost, mainType, subType, rulesText, flavorText, power, toughness, imageUrl, setId) {
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
  },
  deleteCard: function(id){
    Cards.remove(id);
  },
  editCard: function(name, manaCost, mainType, subType, rulesText, flavorText, power, toughness, imageUrl){
    Cards.update(this._id, { $set: {
      name: name,
      manaCost: manaCost,
      mainType: mainType,
      subType: subType,
      rulesText: rulesText,
      flavorText: flavorText,
      power: power,
      toughness: toughness,
      imageUrl: imageUrl,
    }});
  }
});

Meteor.publish("cards", function(){
  return Cards.find();
});