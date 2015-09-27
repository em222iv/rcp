Template.listShow.rendered = function() {
    $( '#left-toggle').click(function() {
        $( '#left-menu')
            .sidebar('toggle')
        ;
    });
};
