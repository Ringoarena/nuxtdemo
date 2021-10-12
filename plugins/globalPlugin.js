export default (context, inject) => {
  const globalVariable = 'Global message'
  inject('globalMsg', globalVariable)
}
