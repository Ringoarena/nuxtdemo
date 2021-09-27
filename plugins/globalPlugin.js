export default (context, inject) => {
  const serverVariable = 'Global message'

  inject('globalMsg', serverVariable)
}
