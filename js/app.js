// Complaint form

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {

    complaintForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const location =
            document.getElementById("location").value;

        const problemType =
            document.getElementById("problemType").value;

        const description =
            document.getElementById("description").value;


        console.log("New Complaint:");

        console.log("Location:", location);
        console.log("Problem:", problemType);
        console.log("Description:", description);


        document.getElementById("successMessage").style.display =
            "block";


        complaintForm.reset();

    });

}
// Temporary dashboard data
// Later these values will come from the database.

const dashboardData = {
    totalComplaints: 36,
    highAreas: 1,
    resolvedComplaints: 14,
    weeklyComplaints: 12
};


// Display dashboard statistics

document.getElementById("totalComplaints").textContent =
    dashboardData.totalComplaints;

document.getElementById("highAreas").textContent =
    dashboardData.highAreas;

document.getElementById("resolvedComplaints").textContent =
    dashboardData.resolvedComplaints;

document.getElementById("weeklyComplaints").textContent =
    dashboardData.weeklyComplaints;
