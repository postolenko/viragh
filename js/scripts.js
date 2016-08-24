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

    setTimeout(function() {

        for( thumbsFor = 0; thumbsFor <= thumbsCount - 1; ++thumbsFor) {

            marginTopIcon = ( $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon").height() - $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon img").height() ) / 2;

            $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon").css({"padding-top" : marginTopIcon + "px" });

        }

    }, 7000);




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