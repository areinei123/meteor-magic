// Router.route('/setShow/:_id', function () {
//   var set = Sets.findOne({_id: this.params._id});
//   this.render('setShow', {data: set});
// });

Router.route('/set/:_id', {
  template: 'set',
  data: function(){
    var set = this.params._id;
    this.render('set', {data: set});
    return Sets.findOne({ _id: set });
  }
});

Router.route('/')