export const server = (done) => {
  app.plugins.browsersync.init({
    proxy: "http://localhost:8888/presto-start/",
  })
}