// ***************************************************************
// ROUTES (Documents)
// ***************************************************************

Router.map(function() {

  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('listsIndex', {
    template: 'listsIndex',
    path: '/lists'
  });

  // List Show
  // -------------------------------------------------------
  this.route('listShow', {
    template: 'listShow',
    path: '/lists/:_id',
    data: function () {
      return Lists.findOne(this.params._id);
    }
  });


});
