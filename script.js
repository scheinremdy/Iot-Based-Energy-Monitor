document.addEventListener("DOMContentLoaded", function() {
    const dailyUsages = [10, 12, 8, 15, 9, 13, 14]; // Example energy usage data
    const currentUsage = dailyUsages[dailyUsages.length - 1];
    const totalUsage = dailyUsages.reduce((acc, usage) => acc + usage, 0);
    const averageUsage = totalUsage / dailyUsages.length;

    document.getElementById("current-usage").textContent = `${currentUsage} kWh`;
    document.getElementById("average-usage").textContent = `${averageUsage.toFixed(2)} kWh`;

    // Update Graphs
    const ctx = document.getElementById('usageGraph').getContext('2d');
    const barCtx = document.getElementById('usageBarChart').getContext('2d');
    const pieCtx = document.getElementById('usagePieChart').getContext('2d');

    // Line Chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: dailyUsages.length }, (_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Energy Usage (kWh)',
                data: dailyUsages,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Bar Chart
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: dailyUsages.length }, (_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Energy Usage (kWh)',
                data: dailyUsages,
                backgroundColor: '#2563eb',
                borderColor: '#2563eb',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Pie Chart
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Usage on First Half', 'Usage on Second Half'],
            datasets: [{
                data: [dailyUsages.slice(0, dailyUsages.length / 2).reduce((acc, usage) => acc + usage, 0),
                       dailyUsages.slice(dailyUsages.length / 2).reduce((acc, usage) => acc + usage, 0)],
                backgroundColor: ['#2563eb', '#32cd32'],
            }]
        }
    });

    // Toggle Dark Mode
    document.getElementById("dark-mode-btn").addEventListener("click", function() {
        document.body.classList.toggle('dark-theme');
    });

    // Export Data to CSV
    document.getElementById("export-btn").addEventListener("click", function() {
        const csvContent = "data:text/csv;charset=utf-8," 
                            + "Day,Energy Usage (kWh)\n" 
                            + dailyUsages.map((usage, index) => `${index + 1},${usage}`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "energy_usage_data.csv");
        document.body.appendChild(link);
        link.click();
    });

    // User login (Simulated)
    document.getElementById("login-btn").addEventListener("click", function() {
        const username = prompt("Enter your username:");
        if (username) {
            alert(`Welcome, ${username}!`);
        }
    });
});
