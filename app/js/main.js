window.addEventListener('load', function () {

    $('.personal_slider').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        navContainerClass: 'personal_slider__arrows',
        navClass: ['personal_slider__arr personal_slider__arr-lt;','personal_slider__arr personal_slider__arr-rt;'],
    });

    function showHideContent( arrayId ) {

        let items = document.getElementById( arrayId ).children;

        items = Array.prototype.slice.call( items );

        items.forEach( function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();

                if( this.classList.contains('active') ) {
                    this.classList.remove('active');
                } else {
                    this.classList.add('active');
                }

                const self = this;
                items.forEach( function (elem) {
                    if( elem !== self ) {
                        if( elem.classList.contains('active') ) {
                            elem.classList.remove('active');
                        }
                    }
                })
            })
        })
    }

    showHideContent( 'programs' );
    showHideContent( 'q-a-wrap' );

    const wow = new WOW();
    wow.init();

    function getCoords(elem) { // кроме IE8-
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    function fadeInAnimate( elems ) {
        let items = document.getElementsByClassName( elems );
        items = Array.prototype.slice.call(items);

            window.addEventListener('scroll', function (e) {
                // 1696

                items.forEach( function (item) {
                    const scrolling = getCoords(item).top - window.innerHeight;
                   if( window.pageYOffset > scrolling ) {
                       if( !item.classList.contains('animate__fadeInUp') ) {
                           item.classList.add('animate__fadeInUp');
                       }
                   } else {
                       if( item.classList.contains('animate__fadeInUp') ) {
                           item.classList.remove('animate__fadeInUp');
                       }
                   }
                })
            })
    }

    fadeInAnimate( 'how-we-preparing_item');

});
