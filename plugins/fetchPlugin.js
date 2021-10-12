export default (context, inject) => {
  const doFetch = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await response.json()
    const person = {
      name: data.name,
      height: data.height,
      url: data.url,
    }
    return person
  }
  inject('fetchData', doFetch)
}
