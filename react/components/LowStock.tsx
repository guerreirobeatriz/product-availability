import React, { Fragment, FunctionComponent } from 'react'
import classNames from 'classnames'
import styles from '../styles.css'

interface Props {
  text: string
  availableQuantity: number
}

const LowStock: FunctionComponent<Props> = ({ text, availableQuantity }) => {
  const [before, after] = text.split('{quantity}')
  return (
    <Fragment>
      {before && <span className={classNames(styles.lowStockText, 'c-muted-2 t-body')}>{before}</span>}
      {availableQuantity && <span className={classNames(styles.lowStockHighlight, 'c-muted-2 t-body b mh1')}>{availableQuantity}</span>}
      {after && <span className={classNames(styles.lowStockText, 'c-muted-2 t-body')}>{after}</span>}
    </Fragment>
  )
}

export default LowStock
