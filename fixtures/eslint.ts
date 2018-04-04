import {readFile} from 'fs'

if(true) {
  // empty
}

/** Pattern 1 */
export const pat1 = {
  reg: new RegExp('\x1f'),
  reg2: /[]/,
  [ 'a-r']: { c: 1},
}

try {
  // empty
}
catch(e) {

  const tru = true
  e = undefined
  if(!!tru) {
    console.log()
    abc()
    function abc() {
      const tru = /a   b/
      const arc = [0, , 1]
      const c = 'd'
      (true || false).toString()
      return [tru, arc, c]
    }
  }
}

/**
 * @param {number} a Parameter a
 */
export function def(a: number, b: number) {
  if(pat1  === {}) {
    console.log(a, b)
  }
  const c = {
   d: {
		e: 1,
   },
  }
  readFile('./test', err => {
    // empty
  })
  const [d, e] = [0, 1]
  if(a === 0) {return []}
  if(a === 1)
  {
    return []
  }
  return [c, d, e]
}
