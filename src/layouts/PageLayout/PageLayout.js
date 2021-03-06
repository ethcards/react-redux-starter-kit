import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Taipei Ethereum Meetup</IndexLink>
    {' · '}
    <Link to='/greeting' activeClassName='page-layout__nav-item--active'>貓選美(Ropsten TestNet)</Link>
    {' · '}
    <Link to='/logoVote' activeClassName='page-layout__nav-item--active'>LogoVote (Logo投票 MainNet)</Link>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
