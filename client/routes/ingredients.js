// ***************************************************************
// ROUTES (Documents)
// ***************************************************************

Router.map(function() {

  // ingredient INDEX
  // -------------------------------------------------------
  this.route('ingredientsIndex', {
    template: 'ingredientsIndex',
    path: '/ingredients'
  });

  // ingredient NEW
  // -------------------------------------------------------
  this.route('ingredientShow', {
    template: 'ingredientShow',
    path: '/ingredients/:_id'
  });


});
