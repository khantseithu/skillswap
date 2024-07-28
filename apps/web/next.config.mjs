import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  cacheOnNavigation: true,
  swSrc: "/sw.ts", // add the path where you create sw.ts
  swDest: "public/sw.js",
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development", // to disable pwa in development
  // ... other options
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ... other next.js config options
};

export default withSerwist(nextConfig);

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === "development") {
  // `await`ing the call is not necessary but it helps making sure that the setup has succeeded.
  //  If you cannot use top level awaits you could use the following to avoid an unhandled rejection:
  //  `setupDevPlatform().catch(e => console.error(e));`
  await setupDevPlatform();
}
