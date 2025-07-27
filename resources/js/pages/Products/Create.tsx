import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Create new product',
    href: '/products/create',
  },
];

export default function CreateProduct() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    image: null as File | null,
    price: '',
    stock: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('products.store'));
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Create new product" />
      <div className="min-h-screen p-6 bg-yellow-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Heading */}
        <div className="mb-6 bg-yellow-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-[#5c3a21] dark:text-gray-100">
          <h1 className="text-2xl font-bold mb-1">Add New Product</h1>
          <p className="text-sm">Fill out the form below to add a new product to your batik store.</p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
            {/* Display Errors */}
            {Object.keys(errors).length > 0 && (
              <Alert className="bg-red-50 border border-red-300 dark:bg-gray-700 dark:border-red-500">
                <CircleAlert className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800 dark:text-red-400">Please fix the following:</AlertTitle>
                <AlertDescription className="text-sm text-red-700 dark:text-red-300">
                  <ul className="list-disc list-inside">
                    {Object.entries(errors).map(([key, message]) => (
                      <li key={key}>{message as string}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-[#5c3a21] dark:text-gray-200">Product Name</Label>
              <Input
                id="name"
                placeholder="Product name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
              />
            </div>

            {/* Image */}
            <div>
              <Label htmlFor="image" className="text-[#5c3a21] dark:text-gray-200">Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] || null)}
              />
            </div>

            {/* Price */}
            <div>
              <Label htmlFor="price" className="text-[#5c3a21] dark:text-gray-200">Price</Label>
              <Input
                id="price"
                type="number"
                min={0}
                placeholder="Price"
                value={data.price}
                onChange={(e) => setData('price', e.target.value)}
              />
            </div>

            {/* Stock */}
            <div>
              <Label htmlFor="stock" className="text-[#5c3a21] dark:text-gray-200">Stock</Label>
              <Input
                id="stock"
                type="number"
                min={0}
                placeholder="Stock"
                value={data.stock}
                onChange={(e) => setData('stock', e.target.value)}
              />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description" className="text-[#5c3a21] dark:text-gray-200">Description</Label>
              <Textarea
                id="description"
                placeholder="Write product description here..."
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="text-right">
              <Button
                type="submit"
                disabled={processing}
                className="bg-yellow-700 hover:bg-yellow-800 text-white"
              >
                Add Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
