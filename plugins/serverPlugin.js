export default (context, inject) => {
  const serverVariable = 'Server message'
  inject('serverMsg', serverVariable)
}
