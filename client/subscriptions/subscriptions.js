// ***************************************************************
// SUBSCRIPTIONS (not handled with routing)
// ***************************************************************
Template.listsIndex.created = function () {
    Meteor.subscribe('pLists');
};

Template.listShow.created = function () {
    Meteor.subscribe('pList');
    Meteor.subscribe('pIngredients');
};

Template.ingredientsIndex.created = function () {
    Meteor.subscribe('pIngredients');
};

Template.home.created = function () {
    Meteor.subscribe('pUsers');
};