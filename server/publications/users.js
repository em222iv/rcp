
// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('pUsers', function() {
  console.log('server');
  return Meteor.users.find();
});

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish("pUser", function(id){

  return Meteor.users.find().fetch();
});


