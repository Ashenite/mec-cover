// Get form and elements for displaying the cover page details
const form = document.getElementById('cover-page-form');
const departmenttt = document.getElementById('department-2');
const coursecode = document.getElementById('ccode');
const courdename = document.getElementById('cname');
const expno = document.getElementById('expNo');
const expname = document.getElementById('expName');
const nameee = document.getElementById('name-2');
const reginooo = document.getElementById('regiNo');
const sessionnn = document.getElementById('session-2');
const rolll = document.getElementById('roll-2');
const batchhh = document.getElementById('batch-2');
const cteacherrr = document.getElementById('cTeacher');
const subdate = document.getElementById('subDate');
const expdateee = document.getElementById('expDate');

// Add event listener to the form to handle submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);
    
    // Extract data from the form
    const department = formData.get('department');
    const courseCode = formData.get('course-code');
    const courseName = formData.get('course-name');
    const expNo = formData.get('experiment-no');
    const expName = formData.get('experiment-name');
    const name = formData.get('name');
    const regiNo = formData.get('registration');
    const session = formData.get('session');
    const roll = formData.get('roll');
    const batch = formData.get('batch');
    const cTeacher = formData.get('course-teacher');
    const subDate = formData.get('submission-date');
    const expDate = formData.get('experiment-date');

    // Update the cover page with form data
    departmenttt.innerHTML = `${department}`;
    coursecode.innerHTML = `${courseCode}`;
    courdename.innerHTML = `${courseName}`;
    expno.innerHTML = `${expNo}`;
    expname.innerHTML = `${expName}`;
    nameee.innerHTML = `${name}`;
    reginooo.innerHTML = `${regiNo}`;
    sessionnn.innerHTML = `${session}`;
    rolll.innerHTML = `${roll}`;
    batchhh.innerHTML = `${batch}`;
    cteacherrr.innerHTML = `${cTeacher}`;
    subdate.innerHTML = `${subDate}`;
    expdateee.innerHTML = `${expDate}`;
});

// Function to preview the cover page
function preview() {
    const departmentSelect = document.getElementById('department');
    const departmentValue = departmentSelect.value;

    // Check if the department is selected (value is not empty)
    if (departmentValue) {
        document.getElementById('popup').style.transform = "translatex(50px)";
    } else {
        // Optionally provide feedback to the user
        alert("You must select a department to preview.");
    }
}

// Function to hide the preview popup
function hide() {
    document.getElementById('popup').style.transform = "translatex(2000px)";
}

// Event listener for the Save as PDF button
document.getElementById('saveAsPdfBtn').addEventListener('click', function () {
    // Reference the content to be converted to PDF
    var element = document.getElementById('content');
    
    // Configure the PDF options
    var opt = {
        margin: 0.5,
        filename: 'cover_page.pdf',
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    
    // Generate the PDF and save it
    html2pdf().from(element).set(opt).save();
    console.log("PDF generated and saved.");
});
