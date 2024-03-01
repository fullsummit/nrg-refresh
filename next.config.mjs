/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/nrg-refresh",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_PROD: "true",
    },
};

export default nextConfig;
