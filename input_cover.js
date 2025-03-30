document.addEventListener("DOMContentLoaded", function () {
    // Retrieve selections from localStorage
    const selections = JSON.parse(localStorage.getItem("selections"));

    if (selections) {
        // Pre-select the main type (Cover/Index)
        const mainType = document.querySelector(`input[name="type"][value="${selections.mainType}"]`);
        if (mainType) mainType.checked = true;

        // Pre-select Lab/Assignment
        const labAssignment = document.querySelector(`input[name="type"][value="${selections.labAssignment}"]`);
        if (labAssignment) labAssignment.checked = true;

        // Pre-select category (Main/Individual Cover)
        const category = document.querySelector(`input[name="category"][value="${selections.category}"]`);
        if (category) category.checked = true;
    }
});




document.addEventListener("DOMContentLoaded", function () {
    // Get elements for type selection
    const labReportRadio = document.getElementById("labReport");
    const assignmentRadio = document.getElementById("assignment");
    const experimentContainer = document.getElementById("experiment-container");
    const assignmentContainer = document.getElementById("assignment-container");
    const categoryDiv = document.getElementById("category");

    // Get elements for assignment number toggle
    const removeAssignmentButton = document.getElementById("removeAssignment");
    const assignmentNoField = document.getElementById("assignmentNo");
    const assignmentNoLabel = document.querySelector('label[for="assignmentNo"]');

    // Get elements for batch auto-fill
    const sessionField = document.getElementById("session");
    const batchField = document.getElementById("batch");
    const departmentRadios = document.querySelectorAll('input[name="dept"]');

    // 1. Handle switching between Lab Report and Assignment
    function updateTypeSelection() {
        if (labReportRadio.checked) {
            experimentContainer.style.display = "block";
            assignmentContainer.style.display = "none";
            categoryDiv.style.display = "block"; // Show category when Lab Report is selected
        } else if (assignmentRadio.checked) {
            experimentContainer.style.display = "none";
            assignmentContainer.style.display = "block";
            categoryDiv.style.display = "none"; // Hide category for Assignment
        }
    }

    // 2. Handle Assignment Number field toggle
    function toggleAssignmentNumber() {
        if (assignmentNoField.style.display === "inline-block") {
            assignmentNoField.style.display = "none";
            if (assignmentNoLabel) assignmentNoLabel.style.display = "none";
            removeAssignmentButton.innerHTML = '<i class="fa-solid fa-plus"></i> Add Assignment No';
        } else {
            assignmentNoField.style.display = "inline-block";
            if (assignmentNoLabel) assignmentNoLabel.style.display = "inline-block";
            removeAssignmentButton.innerHTML = '<i class="fa-solid fa-xmark"></i> Remove assignment no';
        }
    }

    // 3. Auto-fill Batch based on selected Session and Department
    function updateBatch() {
        const session = sessionField.value;
        const selectedDepartment = document.querySelector('input[name="dept"]:checked');

        if (!selectedDepartment) {
            batchField.value = "";
            return;
        }

        const department = selectedDepartment.value;
        let baseBatch;

        const sessionToBatch = {
            "23-24": 16,
            "22-23": 15,
            "21-22": 14,
            "20-21": 13,
            "19-20": 12,
            "18-19": 11,
            "17-18": 10
        };

        if (!(session in sessionToBatch)) {
            batchField.value = "";
            return;
        }

        baseBatch = sessionToBatch[session];

        const departmentOffset = {
            "EEE": 0,
            "CE": -6,
            "CSE": -9
        };

        batchField.value = `${baseBatch + (departmentOffset[department] || 0)}th`;
    }

    // Add event listeners
    labReportRadio.addEventListener("change", updateTypeSelection);
    assignmentRadio.addEventListener("change", updateTypeSelection);
    removeAssignmentButton.addEventListener("click", toggleAssignmentNumber);
    sessionField.addEventListener("change", updateBatch);
    departmentRadios.forEach(radio => radio.addEventListener("change", updateBatch));

    // Initial setup: ensure the correct state on page load
    updateTypeSelection();
});
window.onload = function () {
    // Parse the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const selectedOption = urlParams.get('type');

    // Pre-select the radio button if the parameter exists
    if (selectedOption) {
        const radioButton = document.querySelector(`input[name="type"][value="${selectedOption}"]`);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
};
// Make the options responsive based on screen size
function updateResponsiveLabels() {
    const isSmallScreen = window.innerWidth <= 768;

    const labReportLabel = document.querySelector('label[for="labReport"]');
    const assignmentLabel = document.querySelector('label[for="assignment"]');
    const regularLabel = document.querySelector('label[for="regular"]');
    const irregularLabel = document.querySelector('label[for="irregular"]');

    if (isSmallScreen) {
        if (labReportLabel) labReportLabel.innerHTML = '<i class="fa-solid fa-book"></i> Lab';
        if (assignmentLabel) assignmentLabel.innerHTML = '<i class="fa-solid fa-list-check"></i> Assignment';
        if (regularLabel) regularLabel.innerHTML = '<i class="fa-solid fa-book"></i> Main';
        if (irregularLabel) irregularLabel.innerHTML = '<i class="fa-solid fa-file-lines"></i> Individual';
    } else {
        if (labReportLabel) labReportLabel.innerHTML = '<i class="fa-solid fa-book"></i> Lab Report';
        if (assignmentLabel) assignmentLabel.innerHTML = '<i class="fa-solid fa-list-check"></i> Assignment';
        if (regularLabel) regularLabel.innerHTML = '<i class="fa-solid fa-book"></i> Main Cover';
        if (irregularLabel) irregularLabel.innerHTML = '<i class="fa-solid fa-file-lines"></i> Individual Cover';
    }
}

// Add event listener for window resize
window.addEventListener("resize", updateResponsiveLabels);

// Initial setup: ensure the correct labels on page load
updateResponsiveLabels();