import React, { Component } from 'react'
import loading from './loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='spinner text-center'>
        <img className="my-3"src={loading} alt="loading"/>
      </div>
    )
  }
}

export default spinner