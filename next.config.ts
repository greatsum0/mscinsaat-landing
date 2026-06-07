import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik dışa aktarım: `next build` ile `out/` klasörü üretir.
  // Bu klasör herhangi bir web hosting'e (Node gerekmez) yüklenebilir.
  output: "export",
  // Statik export'ta görsel optimizasyon sunucusu olmadığı için zorunlu.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
