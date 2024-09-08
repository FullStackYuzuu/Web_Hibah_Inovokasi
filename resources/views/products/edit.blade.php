<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Product</title>
</head>
<body>
    <h1>Edit Product</h1>

    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <label for="nama">Nama:</label>
        <input type="text" name="nama" value="{{ $product->nama }}" required><br>

        <label for="harga">Harga:</label>
        <input type="number" name="harga" value="{{ $product->harga }}" required><br>

        <label for="foto">Foto:</label>
        @if ($product->foto)
            <img src="{{ asset('storage/' . $product->foto) }}" alt="Product Photo" width="50"><br>
        @endif
        <input type="file" name="foto"><br>

        <label for="deskripsi">Deskripsi:</label>
        <textarea name="deskripsi" required>{{ $product->deskripsi }}</textarea><br>

        <label for="kegunaan">Kegunaan:</label>
        <input type="text" name="kegunaan" value="{{ $product->kegunaan }}" required><br>

        <button type="submit">Update Product</button>
    </form>
</body>
</html>
