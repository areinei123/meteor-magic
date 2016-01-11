Template.body.helpers({
  sets: function() {
    return Sets.find({});
  },
  set: function() {
    return Session.get('set')
  }
});

Template.body.events({

})