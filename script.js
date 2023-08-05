/* window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print() {
    var elementHTML = document.querySelector("#contentToPrint");
    docPDF.html(elementHTML, {
        callback: function(docPDF) {
            docPDF.save('HTML Linuxhint web page.pdf');
        },
        x: 15,
        y: 15,
        width: 170,
        windowWidth: 650
    });
} */

var $form = $('form#test-form'),
    // url = 'https://script.google.com/macros/s/abcdefghijklmnopqrstuvwxyz1234567890/exec'
    url = 'https://script.google.com/macros/s/AKfycbzOVlMHIAU4ielb0i_YnrecYvuRhQKcbuRXulYuRDa0rIB4cxKcPx88qR8NW_3Af7pHZQ/exec'

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    );
})