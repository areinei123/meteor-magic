Template.body.helpers({
  sets: function() {
    return Sets.find({});
  }
});

Template.body.events({
  "click .new-set": function (event) {
    event.preventDefault();
    
  }
})