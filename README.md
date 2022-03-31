## Chrutils

Tiny package with some utility functions well tested.

**debounce:** Simple debounce function

```js
// Usage:
const handleMouseMove = debounce((ev) => {
  // Do stuff with the event!
}, 250)

window.addEventListener("mousemove", handleMouseMove)
```

---

**capitalize:** Capitalize a word or setence

```js
// Usage:
capitalize("banana")
=> "Banana"

capitalize("come on")
=> "Come on"
```

---

**parseQueryParams:** Parse the query params in the form of: `?query1=value1;query2=value2...,queryN=valueN`

```js
// Usage:
const query = "?key1=value1;key2=value2"
parseQuerParams(query)
=> { key1: "value1", key2: "value2" }
```

---

**random:** Simple random function

```js
// Usage:
random(1, 20)
=> 10
```

---

**range:** Simple function that retuns an array of the given range

```js
// Usage:
range(5) // from 0 to end
=> [0, 1, 2, 3, 4]

range(5, 10) // from start and end
=> [5, 6, 7, 8, 9]

range(0, 6, 2) // start, end & step
=> [0, 2, 4]
```

### More on the way...

> Feel free to open a PR with your utility function!

### Development

- Clone the repo

- Install deps: `npm install`

- Run test: `npm test`
