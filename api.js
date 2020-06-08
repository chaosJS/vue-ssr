export const fetchItem = function (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: `id${Math.random()}`,
        name: 'lc',
        age: 18,
        title: 'xxxssr'
      })
    }, 1000)
  })
}
