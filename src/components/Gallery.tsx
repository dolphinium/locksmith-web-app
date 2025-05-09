"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const TOTAL_IMAGES_TO_SHOW = 8;
const imagePaths = Array.from({ length: TOTAL_IMAGES_TO_SHOW }, (_, i) => `/gallery/image-${i + 1}.jpeg`);

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // To prevent layout shifts or issues with SSR for Masonry,
  // we can ensure it only renders on the client-side.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (imagePaths.length === 0) {
    return (
      <div className="bg-gray-700 p-10 rounded-lg shadow-lg">
        <p className="text-xl text-gray-400">Galeri için henüz görsel eklenmemiş. Lütfen görsellerinizi `public/gallery/` klasörüne ekleyin.</p>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageIndex(null);
  };

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2
  };

  return (
    <>
      {isClient ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex w-auto -ml-4" // flex container, negative margin to offset first item's margin
          columnClassName="my-masonry-grid_column bg-clip-padding pl-4" // column class, padding for gutter
        >
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="mb-4 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={path}
                alt={`Galeri Görseli ${index + 1}`}
                width={500} // Provide a base width, height will be auto
                height={0} // Set height to 0 and use styles for auto height based on width
                sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const placeholderDiv = document.createElement('div');
                  placeholderDiv.className = 'w-full aspect-square bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded-lg';
                  placeholderDiv.textContent = `Görsel ${index + 1} Yüklenemedi`;
                  target.parentElement?.appendChild(placeholderDiv);
                }}
              />
            </div>
          ))}
        </Masonry>
      ) : (
        // Basic grid fallback or loading state for SSR/initial render
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {imagePaths.map((path, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div> // Placeholder
          ))}
        </div>
      )}

      {lightboxOpen && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              selectedItem={selectedImageIndex}
              onChange={(index) => setSelectedImageIndex(index)}
              className="h-full"
            >
              {imagePaths.map((path, index) => (
                <div key={index} className="h-full flex items-center justify-center">
                  <Image
                    src={path}
                    alt={`Büyütülmüş Galeri Görseli ${index + 1}`}
                    width={1200}
                    height={800}
                    style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: 'calc(95vh - 40px)' }} // 40px for potential padding/close button
                    className="rounded"
                  />
                </div>
              ))}
            </Carousel>
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 z-10 bg-white text-black rounded-full p-2 text-2xl leading-none hover:bg-gray-300 transition-colors"
              aria-label="Kapat"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
