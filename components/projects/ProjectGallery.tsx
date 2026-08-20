"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import { RevealImage } from "@/components/ui/RevealImage";
import { Lightbox } from "@/components/projects/Lightbox";

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => (
          <RevealImage
            key={image + index}
            src={image}
            alt={`${title} — interior photo ${index + 1}`}
            className={
              index % 3 === 0
                ? "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]"
                : "aspect-[4/5]"
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="focus-ring group absolute inset-0"
              aria-label={`Open image ${index + 1} of ${images.length} in fullscreen`}
            >
              <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="size-4" aria-hidden />
              </span>
            </button>
          </RevealImage>
        ))}
      </div>

      {openIndex !== null ? (
        <Lightbox
          images={images}
          alt={title}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      ) : null}
    </>
  );
}
