import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Products Overview',
    href: 'admin/products_overview',
  },
];

interface ProductsOverviewProps {
  totalProducts: number;
  lowStockCount: number;
  totalStock: number;
  recentProducts: {
    id: number;
    name: string;
    stock: number;
    price: number;
    created_at: string;
  }[];
}

export default function ProductsOverview({
  totalProducts,
  lowStockCount,
  totalStock,
  recentProducts,
}: ProductsOverviewProps) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Products Overview - Admin" />
      <div className="min-h-screen p-6 space-y-6 bg-yellow-50 dark:bg-gray-900 transition-colors duration-300">

        {/* === Header Dashboard (DISERAGAMKAN) === */}
        <div className="bg-yellow-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-[#5c3a21] dark:text-gray-100">Admin Toko Batik</h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">
          Welcome! Monitor your store activity here.
          </p>
        </div>

        {/* Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Products" value={totalProducts} />
          <StatCard title="Stock Almost Out" value={lowStockCount} />
          <StatCard title="Total Stock (All Products)" value={totalStock} />
        </div>

        {/* Produk Terbaru */}
        <div>
          <h2 className="text-xl font-semibold text-[#5c3a21] dark:text-gray-200 mb-3">Latest Products</h2>
          <div className="bg-white dark:bg-gray-800 border border-yellow-100 dark:border-gray-700 shadow rounded-xl overflow-hidden">
            {recentProducts.length === 0 ? (
              <p className="p-4 text-gray-500 dark:text-gray-400">No products added yet</p>
            ) : (
              <table className="w-full table-auto">
                <thead className="bg-yellow-100 dark:bg-gray-700 text-[#5c3a21] dark:text-gray-300">
                  <tr>
                    <th className="px-4 py-2 text-left">Name Products</th>
                    <th className="px-4 py-2 text-left">Stock</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentProducts.map((product) => (
                    <tr
                      key={product.id}
                      className="hover:bg-yellow-50 dark:hover:bg-gray-700 transition duration-200"
                    >
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.stock}</td>
                      <td className="px-4 py-2">Rp {product.price.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-2">
                        {new Date(product.created_at).toLocaleDateString('id-ID')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

// Komponen Kartu Statistik
function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white dark:bg-gray-800 border-l-8 border-yellow-600 dark:border-gray-500 p-6 rounded-xl shadow-sm transition-colors">
      <p className="text-gray-600 text-sm dark:text-gray-300">{title}</p>
      <p className="text-3xl font-bold text-yellow-800 dark:text-gray-100">
        {value.toLocaleString('id-ID')}
      </p>
    </div>
  );
}
