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

        // let items = document.getElementsByClassName('program_item');
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

});