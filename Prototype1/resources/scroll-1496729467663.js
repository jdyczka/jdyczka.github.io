(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_11").overscroll({ showThumbs:false, direction:'horizontal' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-edycja").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-normalne").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-artysci").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-playlisty").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_5").overscroll({ showThumbs:false, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Panel_6").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);