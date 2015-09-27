Template.listShow.rendered = function() {
    //var all  = document.getElementById("all-ingredients-list")
    //var list  = document.getElementById("list-ingredients-list")
    //all.style.display = 'none';
    //$('.item').click(function(event){
    //    $('.active').removeClass('active');
    //    $(this).addClass('active');
    //    if(event.target.id == "all-ingredients-tab") {
    //
    //        all.style.removeProperty('display');
    //        list.style.display = 'none';
    //    }
    //    if(event.target.id == "list-ingredients-tab") {
    //        all.style.display = 'none';
    //        list.style.removeProperty('display');
    //    }
    //});
};

Template.listShow.helpers({
    ingredients: function(){
        return Ingredients.find({},{sort: {createdAt: -1}});
    }
});

Template.listShow.events ({
});
