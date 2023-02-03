import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


export default function NavProfile({
    name,
    imgSrc,
    imgAlt = "Profile picture",
    onClick,
}: {
    name: string,
    imgSrc: StaticImageData,
    imgAlt?: string,
    onClick?: () => void
}) {
    return (
        <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
            <Link 
                href="/profile" 
                className="group block w-full flex-shrink-0"
                onClick={onClick}
            >
                <div className="flex items-center">
                    <div>
                        <Image
                            className="inline-block h-9 w-9 rounded-full"
                            src={imgSrc}
                            alt={imgAlt}
                            width={36}
                            height={36}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">{name}</p>
                        <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                            View profile
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}