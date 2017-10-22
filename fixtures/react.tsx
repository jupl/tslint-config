import * as React from 'react'

export const element1 = (
  <button
  className="foo"
    disabled={true}
  >
    {'div '}
  </button>
)

export const element2 = <div className="arc">div</div>

export class Element3 extends React.Component {
  log(...args: {}[]) {
    console.log(...args)
  }

  boundLog = (...args: {}[]) => console.log(...args)

  render() {
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

export const element4 = (
  <div>{
    'div'
  }</div>
)

// tslint:disable-next-line:max-classes-per-file
export class Element5 extends React.Component {
  render() {
    return <div ref="ref">div</div>
  }
}

export const element6 = <div>
</div>
