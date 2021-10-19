export default function ({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'You need to login to view that page',
      statusCode: 403
    })
  }
}