<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Product</title>
</head>
<body>
    <h1>Add New Product</h1>

    @if ($errors->any())
        <div>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div>
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" value="{{ old('nama') }}" required>
        </div>

        <div>
            <label for="harga">Harga:</label>
            <input type="number" id="harga" name="harga" value="{{ old('harga') }}" required>
        </div>

        <div>
            <label for="foto">Foto:</label>
            <input type="file" id="foto" name="foto">
        </div>

        <div>
            <label for="deskripsi">Deskripsi:</label>
            <textarea id="deskripsi" name="deskripsi" required>{{ old('deskripsi') }}</textarea>
        </div>

        <div>
            <label for="kegunaan">Kegunaan:</label>
            <input type="text" id="kegunaan" name="kegunaan" value="{{ old('kegunaan') }}" required>
        </div>

        <div>
            <button type="submit">Add Product</button>
        </div>
    </form>
</body>
</html>
