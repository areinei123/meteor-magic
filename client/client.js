Template.body.helpers({
  sets: function() {
    return Sets.find({});
  },
  setShow: function() {
    return Session.get('setShow')
  }
});

Template.body.events({

})