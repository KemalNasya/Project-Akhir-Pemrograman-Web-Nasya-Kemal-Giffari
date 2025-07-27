<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Menampilkan daftar produk.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products/Index', compact('products'));
    }

    /**
     * Menampilkan form tambah produk.
     */
    public function create()
    {
        return Inertia::render('Products/Create');
    }

    /**
     * Menyimpan produk baru ke database.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'stock'       => 'required|integer|min:0',
            'price'       => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        // Simpan gambar jika ada
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        Product::create([
            'name'        => $request->name,
            'image'       => $imagePath,
            'stock'       => $request->stock,
            'price'       => $request->price,
            'description' => $request->description,
        ]);

        return redirect()->route('products.index')->with('success', 'Product created successfully.');
    }

    /**
     * Menampilkan form edit produk.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', compact('product'));
    }

    /**
     * Memperbarui data produk.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'        => 'required|string|max:255',
            'image'       => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'stock'       => 'required|integer|min:0',
            'price'       => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ]);

        // Jika ada gambar baru, simpan dan ganti
        $imagePath = $product->image; // default tetap pakai yang lama
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images', 'public');
        }

        $product->update([
            'name'        => $request->name,
            'image'       => $imagePath,
            'stock'       => $request->stock,
            'price'       => $request->price,
            'description' => $request->description,
        ]);

        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Menghapus produk.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index')->with('success', 'Product deleted successfully.');
    }
}
