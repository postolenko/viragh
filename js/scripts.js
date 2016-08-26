$(document).ready(function() {

    //   preload
    $(window).on('load', function () {

        setTimeout(function() {

            $(".preload-bg").fadeOut(500);

        }, 700);
  

    });


    var thumbsCount = $(".thumbnails-box .thubnail-box").length;
    var thumbsFor = 0;
    var marginTopIcon = 0;


    getSidebarSize();


    var countSliderItemms = $(".slider-box .slide-item").length;

    var sliderItemsFor = 0;

    getSliderImgSize();


    var chekboxIndex;


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        
        getSidebarSize();


        getSliderImgSize();


    });


    setTimeout(function() {

        for( thumbsFor = 0; thumbsFor <= thumbsCount - 1; ++thumbsFor) {

            marginTopIcon = ( $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon").height() - $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon img").height() ) / 2;

            $(".thumbnail:eq("+ thumbsFor +") .icon-box .icon img").css({"top" : marginTopIcon + "px" });

        }

    }, 800);



    $(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});



    // ----------------------------------------------


        function getSidebarSize() {

            $(".sidebar").css({"height" : $(".content").height() + "px"});

            $(".left-background").css({"width" : $(".row").offset().left + "px"});

        }



    // ----------------------------------------------


    $(".search-btn").click(function() {

        $(".search-header").toggleClass("active");

    });

    // -----------------------------------------------------

    countSliderItemms = $(".slider-box .slide-item").length;

    sliderItemsFor = 0;

    function getSliderImgSize() {

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

    }



//----------------------------------------------------------------------------------


    $( ".chekbox-block" )

    .mouseenter(function() {

       chekboxIndex =  $( ".chekbox-block" ).index(this);

       $( ".chekbox-block:eq("+ chekboxIndex +") .show-more" ).css({
            "left" : $(".chekbox-block:eq("+ chekboxIndex +")").width() + 25 + "px"
        });

       // $( ".chekbox-block:eq("+ chekboxIndex +") .show-more" ).fadeIn(100);

    })

    .mouseleave(function() {

        // $( ".chekbox-block:eq("+ chekboxIndex +") .show-more" ).fadeOut(100);

    });




		

});