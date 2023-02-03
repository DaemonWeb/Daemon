import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


export default function NavLogo({
    imgSrc,
    imgAlt = "Profile picture",
    onClick,
}: {
    imgSrc: StaticImageData,
    imgAlt?: string,
    onClick?: () => void
}) {
    return (
        <Link 
            href="/" 
            className="flex flex-shrink-0 items-center px-4"
            onClick={onClick}
        >
            <Image
                className="h-12 w-auto"
                src={imgSrc}
                alt={imgAlt}
                width={48}
                height={48}
            />
        </Link>
    );
}