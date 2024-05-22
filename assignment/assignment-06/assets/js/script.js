document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('barChart').getContext('2d');
    var data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
        datasets: [{
            label: 'Data Set 1',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [12, 19, 3, 5]
        }]
    };

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            maintainAspectRatio: false, // Allow chart to be responsive
            responsive: true,           // Enable responsiveness
        }
    });
});