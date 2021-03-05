module.exports = function ({ addVariant, e }) {
  addVariant('tr', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`tr${separator}${className}`)} tr`
    })
  })
  addVariant('th', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`th${separator}${className}`)} th`
    })
  })
  addVariant('td', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`td${separator}${className}`)} td`
    })
  })
}
