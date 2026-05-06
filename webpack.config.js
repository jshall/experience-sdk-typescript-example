require('dotenv').config();
const packageJson = require('./package.json');
const extensionConfig = require('./extension.js');

const { webpackConfigBuilder } = require('@ellucian/experience-extension');

module.exports = async (env, options) => {
    // Generate Webpack configuration based on the extension.js file
    // and any optional env flags  ("--env verbose", "--env upload", etc)
    const webpackConfig = await webpackConfigBuilder({
        extensionConfig: extensionConfig,
        extensionVersion: packageJson.version,
        mode: options.mode || 'production',
        verbose: env.verbose || process.env.EXPERIENCE_EXTENSION_VERBOSE || false,
        upload: env.upload || process.env.EXPERIENCE_EXTENSION_UPLOAD || false,
        forceUpload: env.forceUpload || process.env.EXPERIENCE_EXTENSION_FORCE_UPLOAD || false,
        uploadToken: process.env.EXPERIENCE_EXTENSION_UPLOAD_TOKEN,
        liveReload: env.liveReload || false,
        port: process.env.PORT || 8082
    });

    // For advanced scenarios, dynamically modify webpackConfig here.
    webpackConfig.resolve.extensions.unshift('.ts', '.tsx');
    const jsLoader = webpackConfig.module.rules.findIndex((r) => r.use?.loader ?? r.loader == 'babel-loader');
    if (jsLoader >= 0)
        webpackConfig.module.rules[jsLoader] = {
            test: /\.(t|j)sx?$/,
            use: { loader: 'ts-loader' },
            exclude: /node_modules/
        };
    webpackConfig.module.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader'
    });
    for (const plugin of webpackConfig.plugins) {
        if (plugin.key == 'ESLintWebpackPlugin') {
            plugin.options.extensions.unshift('ts', 'tsx');
            // lint errors should only prevent a production build
            plugin.options.failOnError = webpackConfig.mode == 'production';
        }
    }

    return webpackConfig;
};
