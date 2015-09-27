Meteor.methods({
    insertList:function() {
        // Insert a list into the collection
        Lists.insert({
            title: "Untitled..",
            author: "Author",
            createdAt: new Date() // current time
        });
    },
    removeList:function(id) {
        // Remove a list into the collection
        Lists.remove(id);
    },
    updateListTitle:function(id,title) {
        // Update a list into the collection
        if(title.length <= 25) {
            Lists.update({_id: id}, {$set: {title: title}});
        }
    }
});
