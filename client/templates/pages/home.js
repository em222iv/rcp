Template.ingredientShow.rendered = function() {
    console.log(this.users);
};
Template.home.events({
    'click #facebook-login': function(event) {
        console.log(event.id);
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    },
    users: function(){

        return Meteor.users.find().fetch();
    }
});
