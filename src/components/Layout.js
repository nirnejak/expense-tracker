import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

/**
 * A High Order Component for wrapping contents of the page.
 * 
 * @component
 * @example
 * return (
 *  <Layout>
 *    <h1>Hello World</h1>
 *  </Layout>
 * )
 */
const Layout = ({ children }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-6">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Layout.propTypes = {
  /**
   * Child Components
   */
  children: PropTypes.element.isRequired
}

export default Layout
