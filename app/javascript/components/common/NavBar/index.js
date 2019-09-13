import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'


const NavBar = ({ title }) => {
  return (
    <div className={styles.nav} >
      {title}
    </div>
  )
}

export default NavBar

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}
