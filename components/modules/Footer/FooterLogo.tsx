/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const FooterLogo = () => (
  <div className={styles.footer__top__item}>
    <Link href="/dashboard" passHref legacyBehavior>
      <a className={styles.footer__top__item__logo}>
        <img src="/img/logo-footer.svg" alt="logo" style={{ height: '150px', width: '150px' }} />
      </a>
    </Link>
  </div>
)

export default FooterLogo
