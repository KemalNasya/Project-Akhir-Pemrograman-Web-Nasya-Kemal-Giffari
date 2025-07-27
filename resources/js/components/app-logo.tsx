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

