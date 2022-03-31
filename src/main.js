/**
 * Debounce a function.
 * @param {Function} callback
 * @param {Number} wait
 */
export function debounce(callback, wait) {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)

    timeoutId = window.setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }
}

/**
 * Return the word passed in capitalized
 * @param {String} word
 */
export function capitalize([first, ...rest]) {
  return `${first.toUpperCase()}${rest.join("").toLowerCase()}`
}

/**
 * Parse query params in the form of: "?query1=value1;queryN=valueN"
 * @param {String} query
 */
export function parseQueryParams(query) {
  const params = query.replace("?", "").split(";")

  return params
    .filter((p) => {
      const [_, value] = p.split("=")
      return value !== "undefined" && value !== "null" && value !== "[]"
    })
    .reduce((allParams, param) => {
      const [key, value] = param.split("=")
      return {
        ...allParams,
        [key]: decodeURIComponent(value),
      }
    }, {})
}
/**
 * Returns a random number based on the params passed in
 * NOTE: This random function includes the lower bound, but excludes the upper bound
 * @param {*} min
 * @param {*} max
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Return an iterator
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @returns
 */
export function range(start, end, step = 1) {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
