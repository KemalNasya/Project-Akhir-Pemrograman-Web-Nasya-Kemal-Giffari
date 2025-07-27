import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';
import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string | null;
  price: number;
  stock: number;
  description: string;
}

interface Props {
  product: Product;
}

export default function EditProduct({ product }: Props) {
  const { data, setData, processing, errors } = useForm({
    name: product.name,
    image: null as File | null,
    price: String(product.price),
    stock: String(product.stock),
    description: product.description,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('stock', data.stock);
    formData.append('description', data.description);
    if (data.image) {
      formData.append('image', data.image);
    }
    formData.append('_method', 'PUT');

    router.post(route('products.update', product.id), formData, {
      forceFormData: true,
      preserveScroll: true,
    });
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Edit Product', href: `/products/${product.id}/edit` },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Edit Product" />

      <div className="min-h-screen p-6 space-y-6 bg-yellow-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <div className="rounded-xl bg-[url('/images/header-batik.jpg')] bg-cover bg-center p-6 text-[#8b4a1c] shadow-md dark:bg-gray-800 dark:text-gray-100">
          <h1 className="text-3xl font-bold drop-shadow">Edit Batik Product</h1>
          <p className="text-lg">Modify the product details below.</p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 w-full md:w-8/12 mx-auto border border-yellow-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
            {/* Errors */}
            {Object.keys(errors).length > 0 && (
              <Alert variant="destructive">
                <CircleAlert className="h-4 w-4" />
                <AlertTitle>Validation Error</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc ml-5">
                    {Object.entries(errors).map(([field, message]) => (
                      <li key={field}>{message as string}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Name */}
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                required
              />
            </div>

            {/* Image */}
            <div>
              <Label htmlFor="image">Product Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setData('image', e.target.files?.[0] || null)}
              />
              {product.image && (
                <p className="text-sm text-gray-500 mt-1">
                  Current Image: <em>{product.image}</em>
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                min={0}
                value={data.price}
                onChange={(e) => setData('price', e.target.value)}
                required
              />
            </div>

            {/* Stock */}
            <div>
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                type="number"
                min={0}
                value={data.stock}
                onChange={(e) => setData('stock', e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={processing}
                className="bg-yellow-700 hover:bg-yellow-800 text-white"
              >
                Update Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
