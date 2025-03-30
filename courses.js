document.addEventListener('DOMContentLoaded', function () {
    // Course Data
    const courses = {
        CSE: {
            1: {
                Lab: [
                    { code: "CSE101L", name: "Programming Lab" },
                    { code: "CSE102L", name: "Discrete Math Lab" }
                ],
                Assignment: [
                    { code: "CSE101A", name: "Programming Assignment" },
                    { code: "CSE102A", name: "Math Assignment" }
                ]
            },
            2: {
                Lab: [
                    { code: "CSE201L", name: "Data Structures Lab" },
                    { code: "CSE202L", name: "Computer Organization Lab" }
                ],
                Assignment: [
                    { code: "CSE201A", name: "Data Structures Assignment" },
                    { code: "CSE202A", name: "Computer Organization Assignment" }
                ]
            }
        },
        EEE: {
            1: {
                Lab: [
                    { code: "EEE101L", name: "Electrical Lab" },
                    { code: "EEE102L", name: "Physics Lab" }
                ],
                Assignment: [
                    { code: "EEE101A", name: "Electrical Assignment" },
                    { code: "EEE102A", name: "Physics Assignment" }
                ]
            },
            2: {
                Lab: [
                    { code: "EEE201L", name: "Circuit Analysis Lab" },
                    { code: "EEE202L", name: "Signals Lab" }
                ],
                Assignment: [
                    { code: "EEE201A", name: "Circuit Analysis Assignment" },
                    { code: "EEE202A", name: "Signals Assignment" }
                ]
            },
            3: {
                Lab: [
                    { code: "EEE 2102", name: "Electronics I Sessional" },
                    { code: "EEE 2104", name: "Energy Conversion I Sessional" }
                ],
                Assignment: [
                    { code: "CSE101A", name: "Programming Assignment" },
                    { code: "CSE102A", name: "Math Assignment" }
                ]
            }
        }
    };

    // Teacher Data
    const courseTeacherMapping = {
        "CSE101L": ["Abdur_Rouf", "Rownak_Ara_Chowdhury"], // Programming Lab
        "CSE102L": ["Abdur_Rouf", "Khaleda_Ferdousi"], // Discrete Math Lab
        "CSE101A": ["Abdur_Rouf"], // Programming Assignment
        "CSE102A": ["Khaleda_Ferdousi"], // Math Assignment
        "EEE101L": ["SM_Anowarul_Haque", "Abdul_Wahed"], // Electrical Lab
        "EEE 2104": ["SM_Anowarul_Haque","Susanta_Dev_Nath"], // Physics Lab
    };

    const teachers = {
        prof_Dr_Engr_Md_Mizanur_Rahman: { name: "Prof. Dr. Engr. Md. Mizanur Rahman", designation: "Principal" },
        Abdur_Rouf: { name: "Abdur Rouf", designation: "Associate Professor (CSE) & Academic Incharge" },
        Md_Rafiqul_Islam: { name: "Md. Rafiqul Islam", designation: "Associate Professor (Mathematics) and Head of Department (Non-Tech)" },
        Dr_Atikur_Rahman_Baizid: { name: "Dr. Atikur Rahman Baizid", designation: "Associate Professor (Physics)" },
        SM_Anowarul_Haque: { name: "S. M. Anowarul Haque", designation: "Assistant Professor and Head of Department (EEE)" },
        Rownak_Ara_Chowdhury: { name: "Rownak Ara Chowdhury", designation: "Assistant Professor and Head of Department (CSE)" },
        Khaleda_Ferdousi: { name: "Khaleda Ferdousi", designation: "Assistant Professor (CSE)" },
        Md_Khalilur_Rahman: { name: "Md. Khalilur Rahman", designation: "Assistant Professor (Chemistry)" },
        Muhammad_Abdus_Sattar_Titu: { name: "Muhammad Abdus Sattar Titu", designation: "Assistant Professor (Mathematics)" },
        Jebunnesa_Roma: { name: "Jebunnesa Roma", designation: "Assistant Professor (Physics)" },
        Sabuj_Ahmed: { name: "Sabuj Ahmed", designation: "Assistant Professor (EEE)" },
        Abdul_Wahed: { name: "Abdul Wahed", designation: "Lecturer (EEE)" },
        Md_Nazrul_Islam: { name: "Md. Nazrul Islam", designation: "Lecturer (CSE)" },
        Md_Nuruzzaman: { name: "Md. Nuruzzaman", designation: "Lecturer (CE)" },
        Md_Salah_Uddin: { name: "Md. Salah Uddin", designation: "Lecturer (EEE)" },
        Ozifatun_Jannat_Akhi: { name: "Ozifatun Jannat Akhi", designation: "Lecturer (CSE)" },
        Tahia_Rabbee: { name: "Tahia Rabbee", designation: "Lecturer (CE)" },
        Mrinal_Kanti_Roy: { name: "Mrinal Kanti Roy", designation: "Lecturer (Chemistry)" },
        Mahfujur_Rahman_Resel: { name: "Mahfujur Rahman Resel", designation: "Lecturer (Mathematics)" },
        Sabrina_Sattar_Setu: { name: "Sabrina Sattar Setu", designation: "Lecturer (CSE)" },
        Mahabubul_Imam_Majumder: { name: "Mahabubul Imam Majumder", designation: "Lecturer (Physics)" },
        Jenia_Shultana: { name: "Jenia Shultana", designation: "Lecturer (CE)" },
        Susanta_Dev_Nath: { name: "Susanta Dev Nath", designation: "Lecturer (EEE)" },
        Muhammad_Saqibul_Amin: { name: "Muhammad Saqibul Amin", designation: "Lecturer (Social Science)" },
        Abdullah_Al_Mahin: { name: "Abdullah Al Mahin", designation: "Lecturer (CE)" }
    };

    // DOM Elements
    const semesterSelect = document.getElementById("semester");
    const courseCodeInput = document.getElementById("courseCode");
    const courseNameInput = document.getElementById("courseName");
    const suggestionsDiv = document.getElementById("suggestions");
    const teacherSuggestionDiv = document.getElementById("teacher-suggestion");
    const teacherSelect = document.getElementById("course-teacher");
    const manualTeacherCheckbox = document.getElementById("manual-teacher");
    const manualTeacherFields = document.getElementById("manual-teacher-fields");

    // Get all department and type radio buttons
    const departmentRadios = document.querySelectorAll('input[name="dept"]');
    const typeRadios = document.querySelectorAll('input[name="type"]');

    // Function to populate teacher dropdown
    function populateTeacherDropdown() {
        teacherSelect.innerHTML = ""; // Clear existing options
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select Teacher";
        teacherSelect.appendChild(defaultOption);

        Object.keys(teachers).forEach(teacherKey => {
            const option = document.createElement("option");
            option.value = teacherKey;
            option.textContent = `${teachers[teacherKey].name} (${teachers[teacherKey].designation})`;
            teacherSelect.appendChild(option);
        });
    }

    // Function to update course suggestions
    function updateSuggestions() {
        const departmentSelect = document.querySelector('input[name="dept"]:checked');
        const typeSelect = document.querySelector('input[name="type"]:checked');
        const selectedSemester = semesterSelect.value;
    
        // Clear previous suggestions
        suggestionsDiv.innerHTML = "";
        suggestionsDiv.style.display = "none"; // Ensure it's hidden initially
    
        if (!departmentSelect || !typeSelect || !selectedSemester) return;
    
        const selectedDepartment = departmentSelect.value;
        const selectedType = typeSelect.value;
    
        if (courses[selectedDepartment] && courses[selectedDepartment][selectedSemester] && courses[selectedDepartment][selectedSemester][selectedType]) {
            const coursesList = courses[selectedDepartment][selectedSemester][selectedType];
    
            if (coursesList.length > 0) {
                // Create heading
                const heading = document.createElement("h4");
                heading.textContent = "Suggested Courses";
                heading.style.marginBottom = "5px";
                suggestionsDiv.appendChild(heading);
    
                const suggestionList = document.createElement("ul");
                suggestionList.style.listStyleType = "none";
                suggestionList.style.padding = "0";
    
                coursesList.forEach(course => {
                    const suggestionItem = document.createElement("li");
                    suggestionItem.style.cursor = "pointer";
                    suggestionItem.style.marginBottom = "5px";
                    suggestionItem.textContent = `${course.code} - ${course.name}`;
                    suggestionItem.addEventListener("click", function () {
                        courseCodeInput.value = course.code;
                        courseNameInput.value = course.name;
                        updateTeacherSuggestions(course.code); // Update teacher suggestions when a course is selected
                    });
                    suggestionList.appendChild(suggestionItem);
                });
    
                suggestionsDiv.appendChild(suggestionList);
                suggestionsDiv.style.display = "block"; // Show only if courses exist
            }
        }
    }
    
    function updateTeacherSuggestions(courseCode) {
        teacherSuggestionDiv.innerHTML = ""; // Clear previous suggestions
        teacherSuggestionDiv.style.display = "none"; // Ensure it's hidden initially
    
        if (courseTeacherMapping[courseCode]) {
            const teachersForCourse = courseTeacherMapping[courseCode];
    
            if (teachersForCourse.length > 0) {
                // Create heading
                const heading = document.createElement("h4");
                heading.textContent = "Suggested Teachers for this Course";
                heading.style.marginBottom = "5px";
                teacherSuggestionDiv.appendChild(heading);
    
                teachersForCourse.forEach(teacherKey => {
                    if (teachers[teacherKey]) {
                        const teacherItem = document.createElement("div");
                        teacherItem.style.cursor = "pointer";
                        teacherItem.style.marginBottom = "5px";
                        teacherItem.textContent = `${teachers[teacherKey].name} (${teachers[teacherKey].designation})`;
                        teacherItem.addEventListener("click", function () {
                            // Auto-select the teacher in the dropdown
                            const option = Array.from(teacherSelect.options).find(opt => opt.value === teacherKey);
                            if (option) {
                                option.selected = true;
                            }
                        });
                        teacherSuggestionDiv.appendChild(teacherItem);
                    }
                });
    
                teacherSuggestionDiv.style.display = "block"; // Show only if teachers exist
            }
        }
    }
    
    

    // Populate teacher dropdown on page load
    populateTeacherDropdown();

    // Event listeners for department, semester, and type selection
    departmentRadios.forEach(radio => radio.addEventListener("change", updateSuggestions));
    typeRadios.forEach(radio => radio.addEventListener("change", updateSuggestions));
    semesterSelect.addEventListener("change", updateSuggestions);

    // Event listener for manual teacher checkbox
    manualTeacherCheckbox.addEventListener("change", function () {
        if (manualTeacherCheckbox.checked) {
            manualTeacherFields.style.display = "block";
            teacherSuggestionDiv.style.display = "none";
            teacherSelect.disabled = true; // Disable the teacher select field
        } else {
            manualTeacherFields.style.display = "none";
            teacherSuggestionDiv.style.display = "block";
            teacherSelect.disabled = false; // Enable the teacher select field
        }
    });
});