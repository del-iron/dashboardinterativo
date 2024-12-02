// Dados simulados
const data = {
    revenue: [1000, 2000, 1500, 3000, 2500, 4000, 3500],
    orders: 450,
    customers: 320,
    categories: {
      Electronicos: 4000,
      Vestuário: 3000,
      Casa: 2000,
      Briquedos: 1500,
    },
  };
  
  // Atualiza as métricas
  document.getElementById('totalRevenue').innerText = `$${data.revenue.reduce((a, b) => a + b, 0)}`;
  document.getElementById('totalOrders').innerText = data.orders;
  document.getElementById('totalCustomers').innerText = data.customers;
  
  // Gráfico de Barras (Categorias)
  const barChartCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barChartCtx, {
    type: 'bar',
    data: {
      labels: Object.keys(data.categories),
      datasets: [
        {
          label: 'Vendas ($)',
          data: Object.values(data.categories),
          backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
          borderColor: '#333',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    },
  });
  
  // Gráfico de Linhas (Receita Mensal)
  const lineChartCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineChartCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Receita ($)',
          data: data.revenue,
          fill: false,
          borderColor: '#4caf50',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    },
  });
  