<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Sale</title>
    <script>
        async function fetchProductPrice(productId) {
            if (!productId) return 0;

            try {
                const response = await fetch(`/products/${productId}/price`);
                const data = await response.json();
                return data.price;
            } catch (error) {
                console.error('Error fetching product price:', error);
                return 0;
            }
        }

        async function updateProductPrice() {
            const productId = document.getElementById('product_id').value;
            const productPrice = await fetchProductPrice(productId);
            document.getElementById('product_price').value = productPrice;
            calculateTotalPrice();
        }

        function calculateTotalPrice() {
            const amount = parseInt(document.getElementById('amount').value) || 0;
            const productPrice = parseFloat(document.getElementById('product_price').value) || 0;
            const totalPrice = amount * productPrice;
            document.getElementById('total_price').value = totalPrice.toFixed(2);
        }

        window.onload = function() {
            document.getElementById('amount').addEventListener('input', calculateTotalPrice);
            document.getElementById('product_id').addEventListener('change', updateProductPrice);
        }
    </script>
</head>
<body>
    <h1>Add New Sale</h1>

    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('sales.store') }}" method="POST">
        @csrf

        <label for="phone_number">Phone Number:</label>
        <input type="text" id="phone_number" name="phone_number" value="{{ old('phone_number') }}" required><br>

        <label for="product_id">Product:</label>
        <select id="product_id" name="product_id" required>
            <option value="">Select Product</option>
            @foreach ($products as $product)
                <option value="{{ $product->id }}">{{ $product->nama }}</option>
            @endforeach
        </select><br>

        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" value="{{ old('amount') }}" required><br>

        <label for="total_price">Total Price:</label>
        <input type="text" id="total_price" name="total_price" value="{{ old('total_price') }}" readonly><br>

        <label for="sale_time">Sale Time:</label>
        <input type="datetime-local" id="sale_time" name="sale_time" value="{{ old('sale_time') }}"><br>

        <input type="hidden" id="product_price">

        <button type="submit">Add Sale</button>
    </form>
</body>
</html>
