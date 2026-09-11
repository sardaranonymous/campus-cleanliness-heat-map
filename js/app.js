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
