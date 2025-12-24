import styles from './loading.module.css'

export function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  )
}
