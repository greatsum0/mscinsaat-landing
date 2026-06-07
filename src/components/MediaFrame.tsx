import Image from "next/image";

interface MediaFrameProps {
  src: string;
  alt: string;
  aspect?: string;
  elevated?: boolean;
}

export function MediaFrame({
  src,
  alt,
  aspect = "aspect-[16/10]",
  elevated,
}: MediaFrameProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden ${
        elevated
          ? "shadow-[var(--shadow-elevated)]"
          : "shadow-[var(--shadow-medium)]"
      }`}
    >
      <div className={`relative w-full ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
