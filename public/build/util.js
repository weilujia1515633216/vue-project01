
const px2remLoader = {
  loader: 'px2rem-loader',
  options: {
  remUnit: 75  // remUnit为转换rem的基础 设计稿单位/等分数 = remUnit
  }
}

function generateLoaders (loader, loaderOptions) {
  // 添加使用 px2remLoader
  const loaders = options.usePostCSS ? [cssLoader, postcssLoader,px2remLoader] : [cssLoader, px2remLoader]

  if (loader) {
    loaders.push({
      loader: loader + '-loader',
      options: Object.assign({}, loaderOptions, {
        sourceMap: options.sourceMap
      })
    })
  }

  // Extract CSS when that option is specified
  // (which is the case during production build)
  if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }
}