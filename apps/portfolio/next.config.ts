import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    // Needed for "use cache" + cacheTag/updateTag in lib/db/queries.ts,
    // so admin edits invalidate the public site's cached content.
    useCache: true,
  },
};

export default withNextIntl(nextConfig);
