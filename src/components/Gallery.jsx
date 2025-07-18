import React, { useEffect, useState } from "react";
import { galleryImages } from "../data/galleryData";

function Gallery() {
  const [imageMeta, setImageMeta] = useState([]);

  useEffect(() => {
    Promise.all(
      galleryImages.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              const isLandscape = img.width >= img.height;
              resolve({ src, isLandscape });
            };
          })
      )
    ).then(setImageMeta);
  }, []);

  return (
    <section className="bg-black py-16 px-6">
      <h2 className="text-orange-600 text-2xl md:text-3xl font-semibold text-center mb-12">
        GALLERY
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[200px]">
        {imageMeta.map(({ src, isLandscape }, i) => {
          const colSpan = isLandscape ? "col-span-2" : "col-span-1";
          const rowSpan = isLandscape ? "row-span-1" : "row-span-2";
          const imageClass = isLandscape ? "object-cover" : "object-contain";

          return (
            <div
              key={i}
              className={`overflow-hidden rounded-xl border-2 border-orange-600 group relative ${colSpan} ${rowSpan} bg-black`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${imageClass}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
