import Image, { StaticImageData } from "next/image";
import { ContentContainer } from "../ContentView";

export default function ProjectGallery({
  images
}: {
  images: StaticImageData[]
}) {
    return (
        <div className="grid grid-flow-row-col-dense grid-cols-3 grid-rows-3">
          {images.map((image, i) => (
     
              <div key={i} className="w-full p-1 md:p-2 overflow-hidden">
                <Image 
                  alt="gallery" 
                  className="object-cover w-full h-auto rounded-lg overflow-hidden"
                  src={image}
                  width={300}
                  height={169}
                />
              </div>
            
          ))}
        </div>
    );
}