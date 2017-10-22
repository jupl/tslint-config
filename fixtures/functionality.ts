async function asyncStuff() {
  await console.log(1)
  return 1
}

asyncStuff()

function a<T>(t?: T) {
  return t!
}

/** Misused new */
interface ITest {
  new(): ITest
}

/** Object literal */
export const c = {} as ITest

/** Unbound method */
export function d() {
  return console.log
}

console.log(!!process.env.TEST)

// tslint:disable-next-line:no-unused-expression
typeof a<boolean>() === 'undefined'

function e<T = number>(t?: T) {
  return t!
}

e<number>()

alert(1)

if(process.env.NODE_ENV === 'production')
  console.log('prod')

for(const f in {a: 1}) {
  console.log(f)
}

function g() {
  label:
  console.log(arguments.callee)
  console.log(0 & 1 | 0)
  let x = false
  if(process.env.NODE_ENV === 'production' && (x = true)) {
    console.log(new Number(1))
    debugger
  }
}

g()

class H {
  /** Prop */
  i: number
}

/** Class */
export class I extends H { // tslint:disable-line:max-classes-per-file
  constructor() {
    super()
    super()
  }
}

switch(process.env.NODE_ENV) {
case 'develop':
  console.log(0)
  break
case 'production':
  console.log(1)
  break
case 'develop':
default:
  console.log(-1)
  break
}

if(process.env.NODE_ENV === 'production') {}

eval('1')

for(const j in [0, 1]) {
  console.log(j)
}

import 'acorn'

console.log('abc${i}')
console.log(this)
console.log(null)

/** Return await */
export async function k() {
  const a = 1
  console.log(a)
  return await asyncStuff()
}

export const [l = [, 1]] = []
console.log(process.env['NODE_ENV'])

if(process.env.NODE_ENV === 'production') {
  throw 'abc'
}

switch(process.env.NODE_ENV) {
case 'develop':
  console.log(0)
  break
case 'production':
  console.log(1)
case 'testing':
  console.log(0)
  break
default:
  break
}

this = 1
