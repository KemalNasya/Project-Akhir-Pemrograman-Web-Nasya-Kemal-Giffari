<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductoverviewController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ProductsOverview', [
            'totalProducts'   => Product::count(),
            'lowStockCount'   => Product::where('stock', '<', 5)->count(),
            'totalStock'      => Product::sum('stock'),
            'recentProducts'  => Product::latest()->take(5)->get(),

        ]);
    }
}
