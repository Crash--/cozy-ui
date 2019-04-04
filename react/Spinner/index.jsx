import React from 'react'
import Icon from '../Icon'
import { translate } from '../I18n'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import iconStyle from '../Icon/styles.styl'
export const Spinner = ({
  t,
  loadingType,
  middle,
  noMargin,
  color,
  size,
  className
}) => {
  let realSize = ''
  switch (size) {
    case 'tiny':
      realSize = 8
      break
    case 'small':
      realSize = 12
      break
    case 'medium':
      realSize = 16
      break
    case 'large':
      realSize = 24
      break
    case 'xlarge':
      realSize = 36
      break
    case 'xxlarge':
      realSize = 80
      break
  }
  return (
    <div
      className={cx(
        styles['c-spinner'],
        {
          [styles['c-spinner--middle']]: middle,
          [styles['c-spinner--nomargin']]: noMargin
        },
        className
      )}
    >
      <Icon
        icon="spinner"
        color={color}
        className={iconStyle['icon--spin']}
        size={realSize}
      />
      {loadingType && <p>{t(`loading.${loadingType}`)}</p>}
    </div>
  )
}

Spinner.propTypes = {
  loadingType: PropTypes.string,
  middle: PropTypes.bool,
  noMargin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ]),
  className: PropTypes.string
}

Spinner.defaultProps = {
  loadingType: '',
  middle: false,
  noMargin: false,
  color: 'blue',
  size: 'medium',
  className: ''
}

export default translate()(Spinner)
