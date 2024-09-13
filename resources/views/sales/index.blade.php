<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales List</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
       document.addEventListener('DOMContentLoaded', function() {
    const labels = @json($labels);
    const data = @json($data);

    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Sales',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }],
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

    </script>
</head>
<body>
    <h1>Sales List</h1>

    @if (session('success'))
        <p>{{ session('success') }}</p>
    @endif

    <a href="{{ route('sales.create') }}">Add Sale</a>

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Phone Number</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Total Price</th>
                <th>Sale Time</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($sales as $sale)
                <tr>
                    <td>{{ $sale->id }}</td>
                    <td>{{ $sale->phone_number }}</td>
                    <td>{{ $sale->product->nama }}</td>
                    <td>{{ $sale->amount }}</td>
                    <td>{{ $sale->total_price }}</td>
                    <td>{{ $sale->sale_time }}</td>
                    <td>
                        <a href="{{ route('sales.edit', $sale->id) }}">Edit</a>
                        <form action="{{ route('sales.destroy', $sale->id) }}" method="POST" style="display:inline;" onsubmit="confirmDelete(event)">
                            @csrf
                            @method('DELETE')
                            <button type="submit" onclick="return confirm('Are you sure you want to delete this product?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <h2>Sales Chart</h2>
    <canvas id="salesChart" width="400" height="200"></canvas>
</body>
</html>
