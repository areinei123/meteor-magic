Template.setForm.events({
  "submit .new-set": function (event) {
    event.preventDefault;
    var setName = event.target.setName.value;
    var setSize = event.target.setSize.value;
    Sets.insert ({
      setName: setName,
      setSize: setSize,
      createdAt: new Date()
    });
    event.target.setName.value = "";
    event.target.setName.value = "";
  }
});

Template.set.events({
  "click .setShow": function() {
    return Session.set('setShow', this._id);
  }
});

Template.set.helpers({
  sets: function () {
    return Sets.find({});
  }
});