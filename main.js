document.addEventListener("DOMContentLoaded", function () {
    const cover = document.getElementById("cover");
    const index = document.getElementById("index");
    const labAssignment = document.getElementById("labAssignment");
    const category = document.getElementById("category");
    const nextButton = document.getElementById("nextButton");

    const labReport = document.getElementById("labReport");
    const assignment = document.getElementById("assignment");
    const regular = document.getElementById("regular");
    const irregular = document.getElementById("irregular");

    let nextPage = "#"; // Default redirection

    function resetSelections() {
        labReport.checked = false;
        assignment.checked = false;
        regular.checked = false;
        irregular.checked = false;
        nextButton.style.opacity = "0";
        nextButton.style.pointerEvents = "none"; // Disable clicks when hidden
    }

    function handleMainSelection() {
        if (cover.checked) {
            labAssignment.style.display = "block"; // Show Lab/Assignment selection
            category.style.display = "none"; // Hide category initially
            setTimeout(() => {
                labAssignment.style.opacity = "1";
                labAssignment.style.transform = "translateY(0)";
            }, 10);
            resetSelections();
        } else if (index.checked) {
            labAssignment.style.opacity = "0";
            labAssignment.style.transform = "translateY(20px)";
            category.style.opacity = "0";
            category.style.transform = "translateY(20px)";
            setTimeout(() => {
                labAssignment.style.display = "none";
                category.style.display = "none";
            }, 300);
            nextPage = "index.html"; // Redirect to index.html
            showNextButton();
        }
    }
    function handleLabAssignmentSelection() {
        if (labReport.checked) {
            category.style.display = "block"; // Show category for Lab Report
            setTimeout(() => {
                category.style.opacity = "1";
                category.style.transform = "translateY(0)";
            }, 10);
        } else if (assignment.checked) {
            category.style.opacity = "0";
            category.style.transform = "translateY(20px)";
            setTimeout(() => {
                category.style.display = "none"; // Hide category for Assignment
            }, 300);
            nextPage = "input_cover.html"; // Directly go to input_cover.html
            showNextButton();
        }
    }
    

    function handleCategorySelection() {
        if (regular.checked || irregular.checked) {
            nextPage = "input_cover.html"; // Redirect to input_cover.html
            showNextButton();
        }
    }

    function showNextButton() {
        nextButton.style.opacity = "1";
        nextButton.style.pointerEvents = "auto"; // Enable clicks
    }

    function goToNextPage() {
        // Save selections to localStorage
        const selections = {
            mainType: document.querySelector('input[name="mainType"]:checked')?.value,
            labAssignment: document.querySelector('input[name="labAssignment"]:checked')?.value,
            category: document.querySelector('input[name="category"]:checked')?.value,
        };
        localStorage.setItem("selections", JSON.stringify(selections));

        // Redirect to the next page
        window.location.href = nextPage;
    }

    // Add event listeners
    cover.addEventListener("change", handleMainSelection);
    index.addEventListener("change", handleMainSelection);
    labReport.addEventListener("change", handleLabAssignmentSelection);
    assignment.addEventListener("change", handleLabAssignmentSelection);
    regular.addEventListener("change", handleCategorySelection);
    irregular.addEventListener("change", handleCategorySelection);
    nextButton.addEventListener("click", goToNextPage);
});