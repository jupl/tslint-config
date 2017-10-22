import {readFile} from 'fs'

if(true) {
  // empty
}

export const pat1 = {
  reg: new RegExp('\x1f'),
  reg2: /[]/,
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
      const arc = [1, , 2]
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
  readFile('./test', err => {
    // empty
  })
  const [c, d] = [1, 2]
  if(a === 1) {return []}
  if(a === 2)
  {
    return []
  }
  return [c, d]
}
