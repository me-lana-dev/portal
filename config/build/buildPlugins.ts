import path from "path";
import webpack from "webpack";
import HTMLWepackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWepackPlugin({
      template: paths.html,
    }),
  ];
}
