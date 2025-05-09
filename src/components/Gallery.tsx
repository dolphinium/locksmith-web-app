"use client";
import Image from 'next/image';

// Assuming you have up to 50 images named image-1.jpg, image-2.jpg, ..., image-50.jpg
// For this basic component, we'll generate paths for a few example images.
// A more robust solution would involve fetching the list of images dynamically or at build time.
const TOTAL_IMAGES_TO_SHOW = 9; // Show first 9 images as an example
const imagePaths = Array.from({ length: TOTAL_IMAGES_TO_SHOW }, (_, i) => `/gallery/image-${i + 1}.jpeg`); // Changed .jpg to .jpeg

const Gallery = () => {
  if (imagePaths.length === 0) {
    return (
      <div className="bg-gray-700 p-10 rounded-lg shadow-lg">
        <p className="text-xl text-gray-400">Galeri için henüz görsel eklenmemiş. Lütfen görsellerinizi `public/gallery/` klasörüne ekleyin.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {imagePaths.map((path, index) => (
        <div key={index} className="aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <Image
            src={path}
            alt={`Galeri Görseli ${index + 1}`}
            fill={true}
            sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
            // Add a placeholder for missing images in case some are not yet uploaded
            // For a better UX, you might want to check if the image exists before rendering
            // or use a more sophisticated image loading strategy.
            onError={(e) => {
              // Fallback for missing images - you could set a default placeholder image
              // e.currentTarget.src = '/gallery/placeholder.jpg'; // if you have one
              e.currentTarget.style.display = 'none'; // or hide if missing
              // Create a placeholder div
              const placeholderDiv = document.createElement('div');
              placeholderDiv.className = 'w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500'; // Adjusted placeholder colors
              placeholderDiv.textContent = `Görsel ${index + 1} Yüklenemedi`;
              e.currentTarget.parentElement?.appendChild(placeholderDiv);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
