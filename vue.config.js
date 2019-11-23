let objectProject = {
  index: {
    entry: 'src/views/index/main.ts', // page 的入口
    template: 'src/public/index.html', // 模板来源
    filename: 'index.html', // 在 dist/index.html 的输出
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Index Page',
    // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  },
  christmas: {
    entry: 'src/views/christmas/main.ts',
    template: 'src/public/christmas.html',
    filename: 'christmas.html',
    title: 'Index Page',
    chunks: ['chunk-vendors', 'chunk-common', 'christmas']
  }
}
let page = {}
// 获取执行哪个文件
let projectname = process.argv.slice(2)[1]
console.log('------------ 开始构建: ', projectname || 'index', '------------')
if (process.env.NODE_ENV === 'development') {
  page = objectProject
} else {
  page[projectname] = objectProject[projectname]
}
module.exports = {
  publicPath: './',
  outputDir: 'dist/' + projectname,
  filenameHashing: true,
  pages: page,
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8080
  }
}
