$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


        // $(window).on('load', function () {

        // setTimeout(function() {

        //     $(".preload-bg").fadeOut(1000);

        // }, 1000);
      

    // });


    var thumbsCount = $(".thumbnails-box .thubnail-box").length;
    var thumbsFor = 0;
    var marginTopIcon = 0;


    getSidebarSize();


    $(window).resize(function() {

        if( $(".wrapper").height() < $(window).height() ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

        }

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        
        getSidebarSize();


    });


    setTimeout(function() {

        for( thumbsFor = 0; thumbsFor <= thumbsCount - 1; ++thumbsFor) {

            marginTopIcon = ( $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon").height() - $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon img").height() ) / 2;

            $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon img").css({"top" : marginTopIcon + "px" });

        }

    }, 1000);


    if( $(".wrapper").height() < $(window).height() ) {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

    }

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


    


    // ----------------------------------------------


        function getSidebarSize() {

            // $(".content").css({"height" : $(".wrapper").height() - $(".header").height() - $(".footer").height() + "px"});

            $(".sidebar").css({"height" : $(".content").height() + "px"});

            $(".sidebar").append("<div class='left-background'></div>");

            $(".left-background").width({"width" : $(".row").offset().left + "px"});

            console.log( $(".content").height() );

        }



    // ----------------------------------------------


    $(".search-btn").click(function() {

        $(".search-header").toggleClass("active");

    });


    var countSliderItemms = $(".slider-box .slide-item").length;

    var sliderItemsFor = 0;

    for( sliderItemsFor = 0; sliderItemsFor <= countSliderItemms - 1; ++sliderItemsFor) {

        if( $(".slider-box .slide-item:eq("+ sliderItemsFor +") img").height() < $(".slider-box").height() ) {

            $(".slider-box .slide-item:eq("+ sliderItemsFor +") img").css({
                                            "height" : $(".slider-box").height() + "px",
                                            "width" : "auto"
                                     });

        } else {

            $(".slider-box .slide-item:eq("+ sliderItemsFor +") img").css({
                                            "height" : "auto",
                                            "width" : 100 + "%"
                                     });

        }

    }



		

});