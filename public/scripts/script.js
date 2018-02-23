/* global $ */
/* global JsBarcode */

$(document).ready(function() {
    
    // main navbar shrinks on scroll down
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        
        if (scroll > 150) {
            $('nav').addClass('shrink');
        } else {
            $('nav').removeClass('shrink');
        }
    });
    
    // semantic ui form radio buttons don't work without this
    $('.ui.radio.checkbox').checkbox();
    
    // on modal close, empty out modal content
    $('#productModal').on('hidden.bs.modal', function(){
        $('.modal-content').html('');
    });
    
    $('#productModal').on('show.bs.modal', function(e) {
    
        var $modal = $(this),
            productID = e.relatedTarget.id;
    
        $.ajax({
            cache   : false,
            type    : 'GET',
            url     : '/products/'+ productID,
            data    : {
                        'modal': true
                
            },
            success: function(data) {
                $modal.find('.modal-content').html(data);
            }
        });
    });    
    
    // generates barcodes for printing
    JsBarcode('.barcode').init();
});

// force autofocus on modal load
// $(document).on('shown.bs.modal', '#productModal', function () {
//     $(this).find('[autofocus]').focus();
// });