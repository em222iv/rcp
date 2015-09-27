//Template.listsIndex.rendered = function() {
//};

Template.listsIndex.helpers({
  lists: function(){
    return Lists.find({},{sort: {createdAt: -1}});
  }
});

Template.listsIndex.events({
  "click #new-list": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("insertList");
  },
  "click .remove-list-element": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeList", this._id);
  },
  'input .list-title-update': function (event) {
      console.log(event.target.value);
      Meteor.call("updateListTitle", this._id,event.target.value);
  }
});




