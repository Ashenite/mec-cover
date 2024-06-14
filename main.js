document.getElementById('saveAsPdfBtn').addEventListener('click', function () {
    // Reference the content to be converted to PDF
    var element = document.getElementById('content');

    // Configure the PDF options
    var opt = {
        margin:       0.5,
        filename:     'myWebpage.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate the PDF and save it
    html2pdf().from(element).set(opt).save();
});
console.log("Fida");