import Image, { StaticImageData } from "next/image";

export default function ProjectGallery({
  images
}: {
  images: StaticImageData[]
}) {
    return (
      <div className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {images.map((image, i) => (
              <div key={i} className="flex flex-wrap w-1/3">
                <div className="w-full p-1 md:p-2 overflow-hidden">
                  <Image 
                    alt="gallery" 
                    className="block object-cover w-full h-auto rounded-lg overflow-hidden"
                    src={image}
                    width={300}
                    height={169}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}