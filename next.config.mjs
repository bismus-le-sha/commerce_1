/** @type {import('next').NextConfig} */
import * as fs from "fs";
const nextConfig = {
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.metrika_counters": JSON.stringify(
          fs.readFileSync("webpack-define-plugin/metrika_counters.html", {
            enc: "utf-8",
          })
        ),
      })
    );
    return config;
  },
};

export default nextConfig;
