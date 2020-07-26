module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',
    entry: './src/index.tsx',

    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx$/,
                use: 'ts-loader',
            },
        ],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: [
            '.ts', '.js', '.tsx', '.jsx'
        ],
    },
};