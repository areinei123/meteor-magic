Template.cardPrintLayout.helpers({
  printCards: function(){
    var setId = Session.get('setId');
    return Cards.find({setId: setId});
  }
});