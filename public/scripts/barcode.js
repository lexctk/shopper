/* global $  */

var barcodeScannerTimer;
var barcodeString = '';

let prefix = '*'; // prefix is *

// capture barcode scanner input
$(window).on('keypress', function (e) {
    barcodeString = barcodeString + String.fromCharCode(e.which);

    clearTimeout(barcodeScannerTimer);
    barcodeScannerTimer = setTimeout(function () {
        processBarcode();
    }, 100);
});

function processBarcode() {
    if (barcodeString == '' || barcodeString.charAt(0) != prefix) {
        console.log('Not a barcode' + barcodeString);
    } else {
        // remove prefix and lowercase it
        let productID=barcodeString.substr(1).toLowerCase();
        
        window.location.replace('/products/' + productID);
        
        //TODO: this doesn't work well, when scanning while in modal. 
        // // try to open ID in a modal 
        // if ($('#'+productID).length) {
        //     $('#'+productID).trigger('click');
        // } else {
        //     // if no modal, redirect to SHOW route
        //     window.location.replace('/products/' + productID);
        // }
    }
    barcodeString = ''; // reset
}