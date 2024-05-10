const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add support for additional file extensions if needed
defaultConfig.resolver.sourceExts.push('cjs');

// Ensure that asset extensions are properly configured
defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'json', 'bin'];

module.exports = defaultConfig;
