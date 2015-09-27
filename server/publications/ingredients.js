// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish('pIngredient', function(id) {
  return Ingredients.find(id);
});

// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('pIngredients', function() {
  return Ingredients.find();
});

