Meteor.methods({
    insertIngredient:function(iName) {
        // Insert a list into the collection
        console.log(iName);
        Ingredients.insert({
            name: iName,
            createdAt: new Date(),
        });
    },
    removeIngredient:function(id) {
        // Remove a list into the collection
        Ingredients.remove(id);
    }
    //updateListTitle:function(id,title) {
    //    // Update a list into the collection
    //    if(event.target.value <= 25) {
    //        Lists.update({_id: id}, {$set: {title: title}});
    //    }
    //}
});
