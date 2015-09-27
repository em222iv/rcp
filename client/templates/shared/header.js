Template.header.rendered = function() {
    $( '#left-toggle').click(function() {
        $( '#left-menu')
            .sidebar({
                dimPage:true,
                closable:true,
                defaultTransition:{
                    computer: {
                        top   : 'overlay'
                    }
                }
            })

            .sidebar('toggle')
        ;
    });
};
