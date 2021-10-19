export default function (context) {
  const { store, error } = context
  if (!store.state.authUser) {
    error({
      message: 'You need to login to view that page',
      statusCode: 403
    })
  }
}