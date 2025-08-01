<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama produk
            $table->string('image')->nullable(); // Gambar produk (nullable)
            $table->unsignedInteger('stock')->default(0); // Stok (bilangan bulat positif)
            $table->decimal('price', 10, 2); // Harga (2 digit desimal)
            $table->text('description')->nullable(); // Deskripsi (opsional)
            $table->timestamps(); // created_at dan updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
