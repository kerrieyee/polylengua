import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'
import { Icon } from 'react-icons-kit'
import {arrowLeft2} from 'react-icons-kit/icomoon/arrowLeft2'


const NavBar = ({ title, onClick }) => {
  let backArrow
  if (onClick) {
    backArrow = (
      <div className={styles.left} onClick={onClick}>
        <Icon icon={arrowLeft2} size={30} />
      </div>
    )
  }
  return (
    <div className={styles.nav} >
      {backArrow}
      {title}
    </div>
  )
}

export default NavBar

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
