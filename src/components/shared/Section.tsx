import styles from './Section.module.scss'
import classNames from 'classnames/bind'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section
