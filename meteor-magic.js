Router.route('/',{
  template: 'home'
});
Router.route('/set/:_id', {
  template: 'set',
  data: function(){
    var set = this.params._id;
    this.render('set', {data: set});
    return Sets.findOne({ _id: set });
  }
});
