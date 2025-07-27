
import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/images/LogoBatik.jpg"
            alt="Logo"
            className="h-9 w-9"
            {...props}
        />
    );
}



