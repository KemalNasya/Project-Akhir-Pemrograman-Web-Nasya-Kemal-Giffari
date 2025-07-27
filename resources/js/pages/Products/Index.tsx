import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Products', href: '/products' }];

interface Product {
  id: number;
  name: string;
  image: string | null;
  price: number;
  stock: number;
  description: string;
}

interface PageProps {
  flash: {
    success?: string;
  };
  products: Product[];
}

export default function Index() {
  const { products, flash } = usePage<PageProps>().props;
  const { processing, delete: destroy } = useForm({});

  const handleDelete = (id: number, name: string) => {
    if (confirm(`Are you sure you want to delete this product? - ${name}`)) {
      destroy(route('products.destroy', id));
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Products" />
      <div className="min-h-screen p-6 bg-yellow-50 dark:bg-gray-900 transition-colors space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between bg-yellow-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div>
            <h1 className="text-2xl font-bold text-[#5c3a21] dark:text-gray-100">Product List</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage your batik store's inventory here.</p>
          </div>
          <Link href={route('products.create')}>
            <Button className="bg-yellow-700 hover:bg-yellow-800 text-white">+ Add Product</Button>
          </Link>
        </div>

        {/* Alert */}
        {flash.success && (
          <Alert className="bg-white border-yellow-300 dark:bg-gray-800 dark:border-gray-600">
            <Megaphone className="h-4 w-4 text-yellow-700" />
            <AlertTitle className="text-yellow-800 dark:text-yellow-400">Notification!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              {flash.success}
            </AlertDescription>
          </Alert>
        )}

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 border border-yellow-100 dark:border-gray-700 shadow rounded-xl overflow-auto">
          <Table>
            <TableCaption className="text-sm text-gray-500 dark:text-gray-400">
              A list of your recent products.
            </TableCaption>
            <TableHeader className="bg-yellow-100 dark:bg-gray-700 text-[#5c3a21] dark:text-gray-200">
              <TableRow>
                <TableHead className="w-[50px]">ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="hover:bg-yellow-50 dark:hover:bg-gray-700 transition">
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    {product.image ? (
                      <img
                        src={`/storage/${product.image}`}
                        alt={product.name}
                        className="h-16 w-16 rounded object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">No image</span>
                    )}
                  </TableCell>
                  <TableCell>Rp {product.price.toLocaleString('id-ID')}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="max-w-xs break-words whitespace-normal">
                    {product.description}
                  </TableCell>
                  <TableCell className="space-x-2 text-center">
                    <Link href={route('products.edit', product.id)}>
                      <Button className="bg-blue-500 hover:bg-blue-700 text-white">Edit</Button>
                    </Link>
                    <Button
                      disabled={processing}
                      onClick={() => handleDelete(product.id, product.name)}
                      className="bg-red-500 hover:bg-red-700 text-white"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
}
