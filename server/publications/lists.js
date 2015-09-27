
// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('pLists', function() {
  console.log('server');
  return Lists.find();
});

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish("pList", function(id){
  return Lists.find({ _id:id});
});


