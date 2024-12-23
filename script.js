// Teachers
const teachers = {
    Md_Alamgir_Hossain: `Md. Alamgir Hossain <br> Principal<br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Md_Rafiqul_Islam: `Md. Rafiqul Islam <br> Associate Professor (Mathematics) and Head of Department (Non-Tech) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    SM_Anowarul_Haque: `S. M. Anowarul Haque <br> Assistant Professor and Head of Department (EEE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Rownak_Ara_Chowdhury: `Rownak Ara Chowdhury <br> Assistant Professor and Head of Department (CSE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Khaleda_Ferdousi: `Khaleda Ferdousi <br> Assistant Professor (CSE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Md_Khalilur_Rahman: `Md. Khalilur Rahman <br> Assistant Professor (Chemistry) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Muhammad_Abdus_Sattar_Titu: `Muhammad Abdus Sattar Titu <br> Assistant Professor (Mathematics) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Jebunnesa_Roma: `Jebunnesa Roma <br> Assistant Professor (Physics) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Sabuj_Ahmed: `Sabuj Ahmed <br> Assistant Professor (EEE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Abdul_Wahed: `Abdul Wahed <br> Lecturer (EEE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Md_Nazrul_Islam: `Md. Nazrul Islam <br> Lecturer (CSE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Md_Nuruzzaman: `Md. Nuruzzaman <br> Lecturer (CE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Md_Salah_Uddin: `Md. Salah Uddin <br> Lecturer (EEE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Ozifatun_Jannat_Akhi: `Ozifatun Jannat Akhi <br> Lecturer (CSE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Tahia_Rabbee: `Tahia Rabbee <br> Lecturer (CE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Mrinal_Kanti_Roy: `Mrinal Kanti Roy <br> Lecturer (Chemistry) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Mahfujur_Rahman_Resel: `Mahfujur Rahman Resel <br> Lecturer (Mathematics) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Sabrina_Sattar_Setu: `Sabrina Sattar Setu <br> Lecturer (CSE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Mahabubul_Imam_Majumder: `Mahabubul Imam Majumder <br> Lecturer (Physics) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Jenia_Shultana: `Jenia Shultana <br> Lecturer (CE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Susanta_Dev_Nath: `Susanta Dev Nath <br> Lecturer (EEE) <br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Muhammad_Saqibul_Amin: `Muhammad Saqibul Amin <br> Lecturer (Social Science)<br><span style="font-size:14px;">Mymensingh Engineering College</span>`,
    Abdullah_Al_Mahin: `Abdullah Al Mahin <br> Lecturer (CE)<br><span style="font-size:14px;">Mymensingh Engineering College</span>`
};


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
const expdatblank = document.getElementById('exp-blank');

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
    const tNameExtra = formData.get('teacher-name');
    const tDesExtra = formData.get('teacher-des');
    const subDate = formData.get('submission-date');
    const expDate = formData.get('experiment-date');

    // Update the cover page with form data
    departmenttt.innerHTML = `${department}`;
    coursecode.innerHTML = `${courseCode}`;
    if(coursecode.innerHTML == ""){
        coursecode.style.marginRight = "400px"
    }
    courdename.innerHTML = `${courseName}`;
    if(courdename.innerHTML == ""){
        courdename.style.marginRight = "400px"
    }
    expno.innerHTML = `${expNo}`;
    expname.innerHTML = `${expName}`;
    if(expname.innerHTML == ""){
        expname.style.width = "600px"
        expname.style.height = "85px"
    }
    nameee.innerHTML = `${name}`;
    reginooo.innerHTML = `${regiNo}`;
    sessionnn.innerHTML = `${session}`;
    rolll.innerHTML = `${roll}`;
    batchhh.innerHTML = `${batch}`;
    if (document.getElementById('ext-teacher').checked) {
        if (tNameExtra && tDesExtra) {
            cteacherrr.innerHTML = `${tNameExtra} <br> ${tDesExtra} <br> <span style="font-size:14px;">Mymensingh Engineering College</span>`;
        } else {
            cteacherrr.innerHTML = "Please provide the teacher's name and designation.";
        }
    } else {
        if (cTeacher) {
            cteacherrr.innerHTML = teachers[cTeacher] || "Teacher not found.";
        } else {
            cteacherrr.innerHTML = "No teacher selected.";
        }
    }  
    
    subdate.innerHTML = `${subDate}`;
    if(expDate == ""){ 
        expdatblank.style.display = "none";
    }else{
        expdateee.innerHTML = `${expDate}`;
    }
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
        filename: `${coursecode.innerHTML}_cover_page.pdf`,
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    
    // Generate the PDF and save it
    html2pdf().from(element).set(opt).save();
    console.log("PDF generated and saved.");
});


function check() {
    const teacherNameExtra = document.getElementById('teacher-name-exs');
    const teacherDesExtra = document.getElementById('teacher-des-exs');
    const extTeacher = document.getElementById('ext-teacher');

    if (document.getElementById('ext-teacher').checked) {
        teacherNameExtra.style.display = 'block';
        teacherDesExtra.style.display = 'block';
        document.getElementById('course-teacher').disabled = true;
    }
    else {
        teacherNameExtra.style.display = 'none';
        teacherDesExtra.style.display = 'none';
        document.getElementById('course-teacher').disabled = false;
    }
}
function mecCpg2ShowPopup() {
    document.getElementById('mec-cpg-popup').style.display = 'block';
}

function mecCpg2HidePopup() {
    document.getElementById('mec-cpg-popup').style.display = 'none';
}

// Function to toggle labels based on selected type
function toggleLabels() {
    const labReportRadio = document.getElementById('lab-report');
    const assignmentRadio = document.getElementById('assignment');
    const expNoLabel = document.querySelector('label[for="experiment-no"]');
    const expNameLabel = document.querySelector('label[for="experiment-name"]');
    const workNoDiv = document.querySelector('.exa');
    const workNmDiv = document.querySelector('.worknm');

    if (labReportRadio.checked) {
        expNoLabel.innerHTML = 'Experiment No.:';
        expNameLabel.innerHTML = 'Experiment Name:';
        workNoDiv.innerHTML = 'Experiment no: <span id="expNo"></span>';
        workNmDiv.innerHTML = 'Experiment Name:';
    } else if (assignmentRadio.checked) {
        expNoLabel.innerHTML = 'Assignment No.:';
        expNameLabel.innerHTML = 'Assignment Name:';
        workNoDiv.innerHTML = 'Assignment no: ';
        workNmDiv.innerHTML = 'Assignment Name:';
    }
}

// Add event listeners to radio buttons
document.getElementById('lab-report').addEventListener('change', toggleLabels);
document.getElementById('assignment').addEventListener('change', toggleLabels);



function openPopupPrivacyTerms() {
    const popup = document.getElementById("popupPrivacyTerms");
    popup.style.display = "block";
    popup.classList.remove("fadeOut", "slideUp");
    popup.classList.add("fadeIn", "slideDown");
}

function closePopupPrivacyTerms() {
    const popup = document.getElementById("popupPrivacyTerms");
    popup.classList.remove("fadeIn", "slideDown");
    popup.classList.add("fadeOut", "slideUp");
    setTimeout(() => {
        popup.style.display = "none";
    }, 50);
}