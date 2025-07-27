// import AppLayout from '@/layouts/app-layout';
// import { Head, Link } from '@inertiajs/react';
// import { type BreadcrumbItem } from '@/types';
// import { Button } from '@/components/ui/button';

// const breadcrumbs: BreadcrumbItem[] = [
//   {
//     title: 'Dashboard',
//     href: '/dashboard',
//   },
// ];

// export default function Dashboard() {
//   return (
//     <AppLayout breadcrumbs={breadcrumbs}>
//       <Head title="Dashboard Admin" />

//       <div className="min-h-screen p-6 space-y-6 bg-yellow-50 dark:bg-gray-900 transition-colors duration-300">

//         {/* Header Dashboard */}
//         <div className="rounded-xl bg-[url('/images/header-batik.jpg')] bg-cover bg-center p-6 text-[#8b4a1c] shadow-md dark:bg-gray-800 dark:text-gray-100">
//           <h1 className="text-3xl font-bold drop-shadow">Admin Toko Batik</h1>
//           <p className="text-lg">Welcome! Use the menu below to manage the store.</p>
//         </div>

//         {/* Navigasi Tombol */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Button to Products Overview */}
//           <Link href="/admin/products_overview">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-8 border-yellow-500">
//               <h2 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Products Overview</h2>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Lihat ringkasan statistik produk terbaru dan stok rendah.</p>
//               <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700">Go to Overview</Button>
//             </div>
//           </Link>

//           {/* Button to Manage Products */}
//           <Link href="/products">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer border-l-8 border-blue-600">
//               <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">Manage Products</h2>
//               <p className="text-sm text-gray-600 dark:text-gray-400">Lihat, tambah, ubah, atau hapus data produk batik.</p>
//               <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Go to Products</Button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard Admin" />

            <div className="min-h-screen space-y-6 bg-yellow-50 p-6 transition-colors duration-300 dark:bg-gray-900">
                {/* Header Dashboard (DISERAGAMKAN) */}
                <div className="rounded-xl bg-yellow-100 p-6 shadow-md dark:bg-gray-800">
                    <h1 className="text-2xl font-bold text-[#5c3a21] dark:text-gray-100">Admin Toko Batik</h1>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Welcome! Use the menu below to manage the store.</p>
                </div>

                {/* Navigasi Tombol */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {/* Button to Products Overview */}
                    <Link href="/admin/products_overview">
                        <div className="cursor-pointer rounded-xl border-l-8 border-yellow-600 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg dark:bg-gray-800">
                            <h2 className="mb-2 text-xl font-semibold text-[#5c3a21] dark:text-yellow-300">Products Overview</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Review recent product stats and low inventory alerts.</p>
                            <Button className="mt-4 bg-yellow-700 text-white hover:bg-yellow-800">Go to Overview</Button>
                        </div>
                    </Link>

                    {/* Button to Manage Products */}
                    <Link href="/products">
                        <div className="cursor-pointer rounded-xl border-l-8 border-blue-600 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg dark:bg-gray-800">
                            <h2 className="mb-2 text-xl font-semibold text-[#5c3a21] dark:text-blue-300">Manage Products</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Manage your batik products by viewing, adding, editing, or deleting entries.
                            </p>
                            <Button className="mt-4 bg-blue-700 text-white hover:bg-blue-800">Go to Products</Button>
                        </div>
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
