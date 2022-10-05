import {BuildOptions} from './types/config';
import {Configuration} from 'webpack';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import {buildPlugins} from './buildPlugins';
import {buildDevServer} from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): Configuration {

    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            publicPath: "/oxem/",
            clean: true
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
}