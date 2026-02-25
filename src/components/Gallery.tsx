import Image from "next/image";

interface GalleryProps {
  images: string[];
  title: string;
}

export function Gallery({ images, title }: GalleryProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Galería</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={`${image}-${index}`}
            className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10"
          >
            <Image
              src={image}
              alt={`${title} captura ${index + 1}`}
              width={1200}
              height={800}
              className="h-56 w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
