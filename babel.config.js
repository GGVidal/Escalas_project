module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
                alias: {
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@navigation': './src/navigation',
                    '@screens': './src/screens',
                    '@services': './src/services',
                    '@utils': './src/utils'
                }
            }
        ]
    ]
};
