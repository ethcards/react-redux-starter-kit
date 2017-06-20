import React from 'react'
import PropTypes from 'prop-types'

class Counter2 extends React.Component {
  static propTypes = {
    terms: PropTypes.object.isRequired,
    isLoadingt: PropTypes.func.isRequired,
    hasErroredc: PropTypes.func.isRequired
  }
  constructor () {
    super()
    this.state = {
      items: [],
    }
  }
  fetchData (url) {
    this.setState({ isLoading: true })
    fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          this.setState({ isLoading: false })
          return response
        })
        .then((response) => response.json())
        .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
        .catch(() => this.setState({ hasErrored: true }))
  }
  componentDidMount () {
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }
  render () {
    if (this.state.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>
    }
    if (this.state.isLoading) {
      return <p>Loading…</p>
    }
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
          ))}
      </ul>
    )
  }
}

export default Counter2
