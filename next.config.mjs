/** @type {import('next').NextConfig} */
const nextConfig = {
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
