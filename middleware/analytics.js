export default function (context) {
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
    $config,
    $axios
  } = context
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  if (process.client) {
    const { from, nuxtState } = context
  }
  // $axios.post('http://www.myanalytics.com', { path: route.fullPath })
}