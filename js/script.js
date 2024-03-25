window.onload = function () {
    // Download chart as image
    document.getElementById('download').addEventListener('click', function() {
        var canvas = document.getElementById('myChart');
        var link = document.createElement('a');
        link.download = 'chart.png';
        link.href = canvas.toDataURL();
        link.click();
     
    });
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expense",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  document
    .querySelector('a[data-bs-toggle="tab"][href="#chart"]')
    .addEventListener("click", function () {
      var incomeData = [
        document.getElementById("january-income").value,
        document.getElementById("february-income").value,
        document.getElementById("march-income").value,
        document.getElementById("april-income").value,
        document.getElementById("may-income").value,
        document.getElementById("june-income").value,
        document.getElementById("july-income").value,
        document.getElementById("august-income").value,
        document.getElementById("september-income").value,
        document.getElementById("october-income").value,
        document.getElementById("november-income").value,
        document.getElementById("december-income").value,
      ];

      var expenseData = [
        document.getElementById("january-expense").value,
        document.getElementById("february-expense").value,
        document.getElementById("march-expense").value,
        document.getElementById("april-expense").value,
        document.getElementById("may-expense").value,
        document.getElementById("june-expense").value,
        document.getElementById("july-expense").value,
        document.getElementById("august-expense").value,
        document.getElementById("september-expense").value,
        document.getElementById("october-expense").value,
        document.getElementById("november-expense").value,
        document.getElementById("december-expense").value,
      ];
      // Update chart data
      myChart.data.datasets[0].data = incomeData;
      myChart.data.datasets[1].data = expenseData;

      // Update chart
      myChart.update();
    });
};
