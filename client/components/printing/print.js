Template.cardPrintLayout.helpers({
  printCards: function(){
    var setId = Session.get('setId');
    return Cards.find({setId: setId});
  }
});

Template.printCard.helpers({
  itsACreature: function(){
    var type = this.mainType;
    if (type.indexOf("Creature") > -1) {
      return true
    };
  }
});