Meteor.methods({
  addSet: function(setName, setSize){
    Sets.insert ({
      setName: setName,
      setSize: setSize,
      createdAt: new Date()
    });
  }
});

Meteor.publish("sets", function(){
  return Sets.find();
});