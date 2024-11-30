import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hctauvlhekfarurtkruj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
//https://hctauvlhekfarurtkruj.supabase.co/storage/v1/object/sign/posts/burger3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3N0cy9idXJnZXIzLmpwZyIsImlhdCI6MTczMjExMDEzNywiZXhwIjoyMDQ3NDcwMTM3fQ.y7slU_8_XQWk9GdlQgoVxXuylXIvQLaFVf8L8ST-DWQ
