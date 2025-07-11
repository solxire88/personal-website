import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['tntaizamsozuvsaecpsl.supabase.co']
    },
    eslint: { ignoreDuringBuilds: true, },
};

export default nextConfig;
