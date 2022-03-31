/**
 * @jest-environment jsdom
 */
import {
  debounce,
  capitalize,
  parseQueryParams,
  random,
  range,
} from "../src/main"

jest.useFakeTimers()

describe("debounce fn", () => {
  let fn, debouncedFn

  beforeEach(() => {
    fn = jest.fn()
    debouncedFn = debounce(fn, 1000)
  })

  test("it execute only once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFn()
    }

    jest.runAllTimers()

    expect(fn).toBeCalledTimes(1)
  })
})

describe("capitalize fn", () => {
  test("it returns the capitalized version of a simple string", () => {
    expect(capitalize("banana")).toEqual("Banana")
  })

  test("it returns the capitalized version of a setence", () => {
    expect(capitalize("run forest")).toEqual("Run forest")
  })

  test("it capitalize no matter the case of the incoming string", () => {
    expect(capitalize("sUrfING RoCKS")).toEqual("Surfing rocks")
  })
})

describe("parseQueryParams fn", () => {
  test("it correctly parse one query params", () => {
    const query = "?search=testing"

    expect(parseQueryParams(query)).toEqual({ search: "testing" })
  })

  test("it correctly parse more than one query param", () => {
    const query = "?search=testing;geolocation=1234;user=jhon"

    expect(parseQueryParams(query)).toEqual({
      search: "testing",
      geolocation: "1234",
      user: "jhon",
    })
  })

  test("it correctly parse more complex query param", () => {
    const query = "?complex=super%20duper%2C%20working;user=jhon"

    expect(parseQueryParams(query)).toEqual({
      complex: "super duper, working",
      user: "jhon",
    })
  })

  test("it remove undefined params", () => {
    const query1 = "?param1=included1;param2=undefined"
    const query2 = "?param1=included2;param2=null"
    const query3 = "?param1=included3;param2=[]"

    expect(parseQueryParams(query1)).toEqual({
      param1: "included1",
    })
    expect(parseQueryParams(query2)).toEqual({
      param1: "included2",
    })
    expect(parseQueryParams(query3)).toEqual({
      param1: "included3",
    })
  })
})

describe("random fn", () => {
  test("it generates the number always between the range", () => {
    const result = random(0, 20)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(20)
  })
})

describe("range fn", () => {
  test("it generates a ranged from 0 to start", () => {
    const iterable = range(5)
    expect(iterable.length).toBe(5)
    expect(iterable).toEqual([0, 1, 2, 3, 4])
  })

  test("it generates a ranged from start and end", () => {
    const iterable = range(5, 10)
    expect(iterable.length).toBe(5)
    expect(iterable).toEqual([5, 6, 7, 8, 9])
  })

  test("it generates a ranged from start and end with steps", () => {
    const iterable = range(5, 20, 3)
    expect(iterable.length).toBe(5)
    expect(iterable).toEqual([5, 8, 11, 14, 17])
  })
})
