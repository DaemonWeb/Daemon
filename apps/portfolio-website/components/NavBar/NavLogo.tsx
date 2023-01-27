import Image, { StaticImageData } from 'next/image';


export default function NavLogo({
    imgSrc,
    imgAlt = "Profile picture"
}: {
    imgSrc: StaticImageData,
    imgAlt?: string,
}) {
    return (
        <div className="flex flex-shrink-0 items-center px-4">
            <Image
                className="h-12 w-auto"
                src={imgSrc}
                alt={imgAlt}
                width={48}
                height={48}
                priority={true}
            />
        </div>
    );
}