"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Menampilkan foto asli dari /public/images/photos/{name}.jpg.
 * Kalau file foto belum ada, otomatis pakai ilustrasi cadangan (fallback).
 */
export default function Photo({
  name,
  fallback,
  alt,
  sizes,
  priority,
  className = "",
}: {
  name: string;
  fallback: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [src, setSrc] = useState(`/images/photos/${name}.jpg`);
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      onError={() => setSrc(fallback)}
      className={`object-cover ${className}`}
    />
  );
}
