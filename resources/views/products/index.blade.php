<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product List</title>
</head>

<body>
    <h1>Product List</h1>

    <a href="{{ route('products.create') }}" class="btn btn-primary">Add New Product</a>

    <!-- Check if the user is authenticated -->
    @if(Auth::check())
    <p>Welcome, {{ Auth::user()->name }}!</p>
    <a href="{{ route('logout') }}" class="btn btn-danger">Logout</a>
@else
    <a href="{{ route('login.google') }}" class="btn btn-danger">Login with Google</a>
@endif

    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Foto</th>
                <th>Deskripsi</th>
                <th>Kegunaan</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->nama }}</td>
                    <td>{{ $product->harga }}</td>
                    <td><img src="{{ asset('storage/' . $product->foto) }}" alt="Product Photo" width="50"></td>
                    <td>{{ $product->deskripsi }}</td>
                    <td>{{ $product->kegunaan }}</td>
                    <td>
                        <a href="{{ route('products.edit', $product->id) }}">Edit</a>
                        <form action="{{ route('products.destroy', $product->id) }}" method="POST" style="display:inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" onclick="return confirm('Are you sure you want to delete this product?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>
