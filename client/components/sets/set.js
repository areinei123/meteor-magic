Meteor.subscribe("sets");

Template.setForm.events({
  "submit .new-set": function (event) {
    event.preventDefault();
    var setName = event.target.setName.value;
    var setSize = event.target.setSize.value;
    Meteor.call("addSet", setName, setSize);
    event.target.setName.value = "";
    event.target.setSize.value = "";
  }
});

Template.setIndex.events({
  "click .set": function() {
    return Session.set('setId', this._id);
  }
});

Template.set.helpers({
  sets: function () {
    return Sets.find({});
  },
  setData: function() {
    return Sets.findOne(Session.get('setId'));
  },
  newCard:function(){
    return Template.instance().newCard.get();
  },
  printLayout:function(){
    return Template.instance().printLayout.get();
  },
  numberOfCards: function(){
    var setId = Session.get('setId');
    return Cards.find({setId: setId}).count();
  }
});

Template.set.events({
  'click .card-new': function(event, template) {
    event.preventDefault();
    var newCard = template.newCard.get();
    template.newCard.set(!newCard);
  },
  'click .print-layout': function(event, template){
    event.preventDefault();
    var printLayout = template.printLayout.get();
    template.printLayout.set(!printLayout);
  }
});

Template.set.created = function(){
  this.newCard = new ReactiveVar(false);
  this.printLayout = new ReactiveVar(false);
};