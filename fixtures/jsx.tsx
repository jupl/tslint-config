import * as React from 'react'

/** Element 1 */
export const element1 = (
  <button
  className="foo"
    disabled={true}
  >
    {'div '}
  </button>
)

/** Element 2 */
export const element2 = <div className="arc">div</div>

/** Element 3 */
export const element3 = [-1, 0, 1].map(x => <div>{x}</div>)

/** Component 1 */
export class Component1 extends React.Component {
  log(...args: {}[]) { // tslint:disable-line:completed-docs
    console.log(...args)
  }

  /** Bound log */
  boundLog = (...args: {}[]) => console.log(...args)

  render() { // tslint:disable-line:completed-docs
    return (
      <div
        onClick={this.log.bind(this)}
        onBlur={x => this.log(x)}
        onChange={this.boundLog}
      >{
        'div'
      }</div>
    )
  }
}

/** Element 4 */
export const element4 = (
  <div>{
    'div'
  }</div>
)

/** Comonent 2 */
// tslint:disable-next-line:max-classes-per-file
export class Component2 extends React.Component {
  render() { // tslint:disable-line:completed-docs
    return <div ref="ref">div</div>
  }
}

/** Element 5 */
export const element5 = <div>
</div>
