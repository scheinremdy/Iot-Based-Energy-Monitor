document.addEventListener("DOMContentLoaded", function() {
    const dailyUsages = [10, 12, 8, 15, 9]; // Example energy usage data
    const currentUsage = dailyUsages[dailyUsages.length - 1];
    const totalUsage = dailyUsages.reduce((acc, usage) => acc + usage, 0);
    const averageUsage = totalUsage / dailyUsages.length;

    document.getElementById("current-usage").textContent = `${currentUsage} kWh`;
    document.getElementById("average-usage").textContent = `${averageUsage.toFixed(2)} kWh`;

    // Update Graph
    const ctx = document.getElementById('usageGraph').getContext('2d');
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

    // Toggle Dark Mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-theme');
    }
});
