/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
    },
};

export default nextConfig;
