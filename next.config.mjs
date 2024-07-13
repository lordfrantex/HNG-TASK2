/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://localhost:3001" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },


    images: {
        remotePatterns: [

            {
                protocol: 'https',
                hostname: 'api.timbu.cloud',

            },

        ],
    },
}

export default nextConfig




// /** @type {import('next').NextConfig} */
// const path = require('path')



// const nextConfig = {
//     reactStrictMode: true,
//     eslint: {
//         ignoreDuringBuilds: true,
//     },

//     async headers() {
//         return [
//             {
//                 // matching all API routes
//                 source: "/api/:path*",
//                 headers: [
//                     { key: "Access-Control-Allow-Credentials", value: "true" },
//                     { key: "Access-Control-Allow-Origin", value: "*" },
//                     { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//                     { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//                 ]
//             }
//         ]
//     },

//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },



//     images: {
//         remotePatterns: [
          
//             {
//                 protocol: 'http',
//                 hostname: 'res.cloudinary.com',

//             },

//         ],
//     },
// }

// module.exports = nextConfig


