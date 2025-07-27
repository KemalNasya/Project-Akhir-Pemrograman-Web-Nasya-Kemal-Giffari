// import AppLogoIcon from './app-logo-icon';

// export default function AppLogo() {
//     return (
//         <>
//             <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
//                 <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
//             </div>
//             <div className="ml-1 grid flex-1 text-left text-sm">
//                 <span className="mb-0.5 truncate leading-tight font-semibold">Admin Toko Batik</span>
//             </div>
//         </>
//     );
// }

// import AppLogoIcon from './app-logo-icon';

// export default function AppLogo() {
//     return (
//         <div className="flex items-center gap-2">
//             {/* Latar belakang batik pada area bulat di belakang logo */}
//             <div
//                 className="flex aspect-square size-10 items-center justify-center rounded-full border-2 border-[#5c3a21] shadow-md"
//                 style={{
//                     backgroundImage: "url('/batik-pattern.png')",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <AppLogoIcon className="size-5 text-white drop-shadow dark:text-gray-300" />
//             </div>/

//             {/* Teks Heder */}
//             <div className="grid flex-1 text-left leading-tight">
//                 <span className="text-sm font-semibold text-[#5c3a21] dark:text-gray-200">
//                     Admin Toko Batik
//                 </span>
//                 <span className="text-xs italic text-[#9b6d3f] dark:text-gray-400">
//                     Sentuhan Tradisi & Modern
//                 </span>
//             </div>
//         </div>
//     );
// }

import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="flex items-center gap-2">
            {/* Logo Gambar Bulat */}
            <div className="flex aspect-square size-10 items-center justify-center rounded-full border-2 border-[#5c3a21] shadow-md overflow-hidden bg-white dark:bg-gray-800">
                <AppLogoIcon className="object-cover h-full w-full" />
            </div>

            {/* Teks di samping logo */}
            <div className="grid flex-1 text-left leading-tight">
                <span className="text-sm font-semibold text-[#5c3a21] dark:text-gray-200">
                    Admin Toko Batik
                </span>
                <span className="text-xs italic text-[#9b6d3f] dark:text-gray-400">
                    Sentuhan Tradisi & Modern
                </span>
            </div>
        </div>
    );
}

