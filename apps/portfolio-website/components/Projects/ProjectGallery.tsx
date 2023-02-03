import Image, { StaticImageData } from "next/image";
import { Plock, Breakpoint } from "react-plock";


const breakpoints: Breakpoint[] = [
  { size: 640, columns: 2 },
  { size: 1024, columns: 3 },
  { size: 1536, columns: 4 },
];

export default function ProjectGallery({
  images
}: {
  images: StaticImageData[]
}) {
    return (
        <Plock 
          breakpoints={breakpoints}
          debounce={0}
          gap="0.5rem"
        >
          {images.map((image, i) => (
            <div key={i} className="relative mb-4 before:content-[''] before:rounded-md">
              <Image 
                alt="gallery" 
                className="w-full rounded-md"
                src={image}
                width={300}
                height={169}
                placeholder="blur"
              /> 
            </div>    
          ))}
        </Plock>
    );
}