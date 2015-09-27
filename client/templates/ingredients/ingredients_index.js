
Template.ingredientsIndex.helpers({
  ingredients: function(){
    return Ingredients.find({},{sort: {createdAt: -1}});
  }
});

Template.ingredientsIndex.events({
  "click #ingredient-add": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    //console.log(document.getElementById("name").value);
    Meteor.call("insertIngredient",document.getElementById("name").value);
  },
  "click .remove-ingredient": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeIngredient", this._id);
  }
  //'input .ingredient-title-update': function (event) {
  //    console.log(event.target.value);
  //    Meteor.call("updateListTitle", this._id,event.target.value);
  //}
});


